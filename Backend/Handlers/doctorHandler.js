const { sequelize, Doctor, Booking } = require('../models');
const jwt = require('jsonwebtoken');
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const emailHandler = require('./emailHandler');

exports.loginDoctor = async (req, res) => {
  try {
    let email = req.body.email;
    let upass = req.body.password;
    const doctor = await Doctor.findOne({ where: { email: email } });
    if (doctor !== null) {
      const valid = await bcrypt.compare(
        upass + BCRYPT_PASSWORD,
        doctor.dataValues.password
      );
      if (valid === true) {
        const token = jwt.sign(
          { _id: doctor.id, userType: 'doctor' },
          process.env.JWT_STRING
        );
        await Doctor.update(
          {
            tokens: sequelize.fn(
              'array_append',
              sequelize.col('tokens'),
              token
            ),
          },
          { where: { id: doctor.id } }
        );
        res.cookie('token', token, {
          httpOnly: true,
          // secure: true, set this on production
          sameSite: 'strict',
        });
        doctor.userType = "doctor";
        res.status(200).json(doctor);
      } else {
        res.status(400).send('invalid email or password');
      }
    } else {
      res.status(400).send('invalid email or password');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.Edit = async (req, res, next) => {
  try {
    debugger;
    const updates = Object.keys(req.body).filter(
      (update) => req.body[update] !== ''
    );
    const allowedUpdates = [
      'Dname',
      'password',
      'email',
      'gender',
      'mobilenumber',
      'dob',
    ];
    const validUpdate = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!validUpdate) {
      res.status(500).send('Invalid Updates!');
    }
    updates.forEach((update) => (req.user[update] = req.body[update]));
    req.user.save();
    res.status(200).send(req.user);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createDoctor = async (req, res) => {
  try {
    const image = req.file;
    const sentInfo = {
      Dname: req.body.firstName + ' ' + req.body.lastName,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email,
      dob: req.body.dob,
      gender: req.body.gender,
      mobilenumber: req.body.mobilenumber,
      speciality: req.body.speciality,
      location: req.body.location,
    };
    //console.log(req.body)
    if (image) {
      const imageUrl = image.path;
      sentInfo.imgPath = imageUrl;
    }

    sentInfo.password = bcrypt.hashSync(
      sentInfo.password + BCRYPT_PASSWORD,
      parseInt(SALT_ROUNDS)
    );
    const doctor = await Doctor.create(sentInfo);
    const token = jwt.sign(
      { _id: doctor.id, userType: 'doctor' },
      process.env.JWT_STRING
    );
    await Doctor.update(
      {
        tokens: sequelize.fn('array_append', sequelize.col('tokens'), token),
      },
      { where: { id: doctor.id } }
    );
    res.cookie('token', token, {
      httpOnly: true,
      // secure: true, set this on production
      sameSite: 'strict',
    });
    const port = process.env.BACK_END_PORT;
    const verUrl = `http://localhost:${port}/confirmation/${token}`;

    emailHandler.sendVerificationEmail(sentInfo.email, verUrl);
    doctor.userType = "doctor";
    return res.status(201).json(doctor);
  } catch (err) {
    console.log(err)
    return res.status(500).json(err);
  }
};

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.status(200).json(doctors);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.getDoctor = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const doctor = await Doctor.findOne({
      where: { id: doctorId },
      attributes: { exclude: ['password', 'tokens', 'email', 'confirmed'] },
      include: [
        {
          model: Booking,
          where: { status: 'pending' },
          attributes: ['startTime', 'endTime', 'status',"rating","comment"],
        },
      ],
    });
    res.status(200).json(doctor);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const doctorID = req.user.id;
    const doctor = await Doctor.findByPk(doctorID);
    if (doctor) {
      doctor.destroy();
      res.status(200).json('Doctor removed successfully!');
    } else {
      res.status(500).json('Doctor not found');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

exports.logout = async (req, res) => {
  try {
    const validTokens = req.user.tokens.filter(
      (token) => token !== req.cookies.token
    );
    await Doctor.update(
      { tokens: validTokens },
      { where: { id: req.user.id } }
    );
    res.cookie('token', '', {
      expires: new Date('October 13, 1970 11:13:00'),
      httpOnly: true,
      // secure: true, set this on production
      sameSite: 'strict',
    });
    res.send(req.user);
  } catch (e) {
    res.send({ error: e });
  }
};

exports.logoutFromAllDevices = async (req, res) => {
  try {
    await Doctor.update({ tokens: [] }, { where: { id: req.user.id } });
    res.cookie('token', '', {
      expires: new Date('October 13, 1970 11:13:00'),
      httpOnly: true,
      // secure: true, set this on production
      sameSite: 'strict',
    });
    res.send(req.user);
  } catch (e) {
    res.send({ error: e });
  }
};

exports.searchDoctors = async (req, res) => {
  const {
    name,
    id,
    email,
    dob,
    gender,
    mobilenumber,
    confirmed,
    rating,
    speciality,
    sub_specialties,
    title,
    area,
    location,
    fees,
    imgPath,
  } = req.query.filters;
  //console.log(req.params)
  const queryObj = {};
  //console.log(req.query.filters)

  if (name) {
    queryObj.Dname = { [Op.like]: '%' + name + '%' };
  }
  if (id) {
    queryObj.id = id;
  }
  if (email) {
    queryObj.email = email;
  }
  if (dob) {
    queryObj.dob = dob;
  }
  if (gender) {
    queryObj.gender = gender;
  }
  if (confirmed) {
    queryObj.confirmed = confirmed;
  }
  if (rating) {
    queryObj.rating = rating;
  }
  if (speciality) {
    queryObj.speciality = speciality;
  }
  if (sub_specialties) {
    queryObj.sub_specialties = sub_specialties;
  }
  if (title) {
    queryObj.title = title;
  }
  if (area) {
    queryObj.area = area;
  }
  if (location) {
    queryObj.location = location;
  }
  if (fees) {
    queryObj.fees = fees;
  }
  if (imgPath) {
    queryObj.imgPath = imgPath;
  }

  console.log(queryObj);
  try {
    const doctors = await Doctor.findAll({
      where: queryObj,
      attributes: { exclude: ['password', 'tokens', 'email', 'confirmed'] },
      include: [
        {
          model: Booking,
          where: { status: 'pending' },
          attributes: ['startTime', 'endTime', 'status'],
        },
      ],
    });
    //console.log(doctors);
    res.status(200).json(doctors);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// !!!!!!!!!!!!!!!!!!!!!!! DOESN'T WORK
// !!!!!!! CAN BE REPLACED BY ADDING THE BOOKING MODEL VALUES TO THE GET DOCTOR REQUEST
exports.getReviews = (req, res, next) => {
  console.log('ALIVE');

  const id = req.body.id;
  const Dname = req.body.Dname;
  console.log('ALIVE');
  // try {
  // const Reviews = await Doctor.findAll({
  //   where: {
  //     id: ID,
  //     Dname: Dname
  //   },
  //   attributes: { include: ['Dname', 'title', 'speciality', 'rating', 'reviewers'] },
  //   include: [{ model: Booking, where: { status: 'finished' }, attributes: ['rating', 'review'] }]
  // })
  res.status(200).json('Reviews');
  // } catch (err) {
  //   res.status(500).json(err)
  // }
};
