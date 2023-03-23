const { sequelize, Doctor } = require('../models');
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;
const bcrypt = require('bcrypt');

exports.createDoctor = async (req, res) => {
  try {
    const image = req.file;
    const sentInfo = ({
      firstName,
      lastName,
      password,
      email,
      dob,
      gender,
      mobilenumber,
      speciality,
      sub_specialties,
      title,
      area,
      location,
      Fees,
    } = req.body);
    if(image){
          const imageUrl =image.path;
    sentInfo.imgPath = imageUrl ;
    }


    sentInfo.password = bcrypt.hashSync(
      sentInfo.password + BCRYPT_PASSWORD,
      parseInt(SALT_ROUNDS)
    );
    const doctor = await Doctor.create(sentInfo);
    return res.status(201).json(doctor);
  } catch (err) {
    return res.status(500).json(err);
  }
};
