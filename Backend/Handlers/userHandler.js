const { sequelize, User, Booking, Doctor } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { where } = require('sequelize');
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;
const emailHandler = require('./emailHandler');
//GET Logic
exports.getUsers = (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};
//LOGIN BY EMAIL
exports.loginUser = async (req, res) => {
  try {
    let email = req.body.email;
    let upass = req.body.password;
    const user = await User.findOne({ where: { email: email } });
    if (user !== null) {
      const valid = await bcrypt.compare(
        upass + BCRYPT_PASSWORD,
        user.dataValues.password
      );
      if (valid === true) {
        const token = jwt.sign(
          { _id: user.id, userType: 'user' },
          process.env.JWT_STRING
        );
        await User.update(
          {
            tokens: sequelize.fn(
              'array_append',
              sequelize.col('tokens'),
              token
            ),
          },
          { where: { id: user.id } }
        );
        res.cookie('token', token, {
          httpOnly: true,
          // secure: true, set this on production
          sameSite: 'strict',
          maxAge: 86400000 * 10,
        });
        user.userType = 'user';
        res.status(200).json(user);
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

//POST logic
exports.createUser = async (req, res) => {
  try {
    const json = ({
      firstName,
      lastName,
      password,
      email,
      dob,
      gender,
      mobilenumber,
    } = req.body);
    json.password = bcrypt.hashSync(
      json.password + BCRYPT_PASSWORD,
      parseInt(SALT_ROUNDS)
    );

    const user = await User.create(json);
    const token = jwt.sign(
      { _id: user.id, userType: 'user' },
      process.env.JWT_STRING
    );
    await User.update(
      {
        tokens: sequelize.fn('array_append', sequelize.col('tokens'), token),
      },
      { where: { id: user.id } }
    );
    const port = process.env.BACK_END_PORT;
    res.cookie('token', token, {
      httpOnly: true,
      // secure: true, set this on production
      sameSite: 'strict',
      maxAge: 86400000 * 10,
    });
    const verUrl = `http://localhost:${port}/confirmation/${token}`;

    emailHandler.sendVerificationEmail(json.email, verUrl);
    user.userType = 'user';
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.logout = async (req, res) => {
  try {
    const validTokens = req.user.tokens.filter(
      (token) => token !== req.cookies.token
    );
    await User.update({ tokens: validTokens }, { where: { id: req.user.id } });
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
    await User.update({ tokens: [] }, { where: { id: req.user.id } });
    res.cookie('token', '', {
      expires: new Date('October 13, 1970 11:13:00'),
      httpOnly: true,
      // secure: true, set this on production
      sameSite: 'strict',
    });
    res.status(200).send(req.user);
  } catch (e) {
    res.send({ error: e });
  }
};

// Dummy request for authentication middleware testing
exports.authTest = async (req, res) => {
  try {
    const tokens = req.user.tokens;
    res.status(200).send(tokens);
  } catch (e) {
    res.send({ error: e });
  }
};

// TODO : use the req.user instead of the query
exports.getUserInfo = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const user = await User.findAll({
      attributes: [
        'firstName',
        'lastName',
        'email',
        'gender',
        'mobilenumber',
        'dob',
      ],
      where: { id: userId },
      include: [
        {
          model: Booking,
          attributes: {
            exclude: ['UserId', 'DoctorId', 'createdAt', 'updatedAt'],
          },
          include: [
            {
              model: Doctor,
              attributes: [
                'Dname',
                'gender',
                'mobilenumber',
                'rating',
                'speciality',
                'sub_specialties',
                'title',
                'fees',
              ],
            },
          ],
        },
      ],
    });
    console.log(user);
    res.send(202, user);
  } catch (err) {
    res.send(err);
    console.log(err);
  }
};

exports.Edit = async (req, res, next) => {
  try {
    debugger;
    const updates = Object.keys(req.body).filter(
      (update) => req.body[update] !== ''
    );
    const allowedUpdates = [
      'firstName',
      'lastName',
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
  /*
  const userId = req.user.id;
  const updatedFirstName = req.body.firstName;
  const updatedLastName = req.body.lastName;
  const updatedEmail = req.body.email;
  const updatedPassword = bcrypt.hashSync(
    req.body.password + BCRYPT_PASSWORD,
    parseInt(SALT_ROUNDS)
  );
  const updatedGender = req.body.gender;
  const updatedMobilenumber = req.body.mobilenumber;
  const updatedDob = req.body.dob;
  User.findByPk(userId)
    .then((user) => {
      console.log(user);
      user.firstName = updatedFirstName;
      user.lastName = updatedLastName;
      user.email = updatedEmail;
      user.password = updatedPassword;
      user.gender = updatedGender;
      user.mobilenumber = updatedMobilenumber;
      user.dob = updatedDob;
      return user.save();
    })
    .then((result) => {
      console.log('edit complete');
      res.redirect('/users');
    })
    .catch((error) => {
      console.log(error);
      res.send({ error: error });
    });
    */
};

exports.Delete = (req, res, next) => {
  const userId = req.user.id;
  User.findByPk(userId)
    .then((user) => {
      if (user) {
        user
          .destroy()
          .then((result) => {
            console.log('user was found and destroyed');
            res.redirect('/users');
          })
          .catch((error) => {
            console.log(error);
            res.send({ error: error });
          });
      } else {
        console.log('user was not found');
        res.redirect('/users');
      }
    })
    .catch((error) => {
      console.log(error);
      res.send({ error: error });
    });
};
