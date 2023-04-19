const { sequelize, Doctor } = require('../models');
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;
const { Op } = require("sequelize");
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
    const doctorID = req.body.id
    const doctor = await Doctor.findByPk(doctorID)
    res.status(200).json(doctor)
  }
  catch(err){
    res.status(500).json(err)

  }
}

  exports.deleteDoctor = async (req,res) =>{
    try{
      const doctorID = req.body.id
      const doctor = await Doctor.findByPk(doctorID)
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

  exports.searchDoctors = async (req,res) =>{
    const {Dname , id , email ,dob , gender , mobilenumber , confirmed , rating , speciality , sub_specialties , title , area , location , fees , imgPath } = req.query.filters
    const queryObj = {}
    
    if(Dname){
      queryObj.Dname  = { [Op.like] : '%' + Dname + '%'}
    }
    if(id){
      queryObj.id = id
    }
    if(email){
      queryObj.email = email
    }
    if(dob){
      queryObj.dob = dob
    }
    if(gender){
      
      queryObj.gender = gender
    }
    if(confirmed){
      queryObj.confirmed = confirmed
    }
    if(rating){
      queryObj.rating = rating
    }
    if(speciality){
      queryObj.speciality = speciality
    }
    if(sub_specialties){
      queryObj.sub_specialties = sub_specialties
    }
    if(title){
      queryObj.title = title
    }
    if(area){
      queryObj.area = area
    }
    if(location){
      queryObj.location = location
    }
    if(fees){
      queryObj.fees = fees
    }
    if(imgPath){
      queryObj.imgPath = imgPath
    }
  
    //console.log(queryObj)
    try{
      const doctors = await Doctor.findAll(
        {
          where: queryObj
        }
      )
      res.status(200).json(doctors)
      console.log(req.query)
     
    

    }
    catch(err){
      console.log(err)
      res.status(500).json(err)
    }
  
    



  }

