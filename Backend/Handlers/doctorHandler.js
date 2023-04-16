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
    if (image) {
      const imageUrl = image.path;
      sentInfo.imgPath = imageUrl;
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


exports.getAllDoctors = async (req,res) =>{
  try{
    const doctors = await Doctor.findAll();
    res.status(200).json(doctors);
  }
  catch(err){
    return res.status(500).json(err)
  }

 
}

exports.getDoctor = async (req,res) =>{
  try{
    const userID = req.body.id
    const doctor = await Doctor.findByPk(userID)
    res.status(200).json(doctor)
  }
  catch(err){
    res.status(500).json(err)

  }
}

  exports.deleteDoctor = async (req,res) =>{
    try{
      const userID = req.body.id
      const doctor = await Doctor.findByPk(userID)
      if(doctor){
        doctor.destroy()
        res.status(200).json("Doctor removed successfully!")
      }
      else{
        res.status(500).json("Doctor not found")

      }
    }
    catch(err){
      console.log(err)
      res.status(500).json(err)
    }
  }






