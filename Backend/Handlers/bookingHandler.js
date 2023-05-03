const dayjs = require('dayjs');
const { sequelize, Booking } = require('../models');
const jwt = require('jsonwebtoken');
const { where } = require('sequelize');
exports.addAppoitment = async (req, res) => {
  try {
    console.log(req.user.userType)
    if(req.user.userType == 'doctor'){
    let startTime = dayjs(req.body.startTime);
    let endTime = dayjs(req.body.endTime);
    let diff = Math.abs(startTime - endTime);
    let Duration = req.body.duration * 60000; // duration in milliseconds
    let numberOfTimeSlots = Math.floor(diff / Duration);
    const doctorId = req.user.id;
    while (numberOfTimeSlots--) {
      endTime = startTime.add(req.body.duration, 'm');
      const booking = await Booking.create({
        startTime: startTime,
        endTime: endTime,
        doctorId: doctorId,
      });

      startTime = endTime;
    }
    res.status(201).json('done');}
    else{
        return res.status(401).json('unauthorized request');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};
exports.reserveAppoitment = async (req, res) => {
  try {
    if(req.user.userType == 'user'){
    const userId = req.user.id;
    const a_Id = req.body.appoitmentId;
    const resualt = await Booking.update({userId :userId , status : "reserved"},{where:{appoitmentId :a_Id}})
    res.status(201).json(resualt);}
    else{
        return res.status(401).json('unauthorized request');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};
exports.deleteAppoitment = async (req, res) => {
    try {
        if(req.user.userType == 'doctor'){
        const doctorId = req.user.id;
        const a_Id = req.body.appoitmentId;
        const resualt = await Booking.destroy({where:{appoitmentId :a_Id , doctorId : doctorId}})
        if(resualt){res.status(201).json(resualt);}
        else{
            res.status(401).json("unauthorized request");
        }
        }
        else{
            return res.status(401).json('unauthorized request');
        }
      } catch (err) {
        return res.status(500).json(err);
      }
};


exports.showAvailable = async (req, res) => {
    let doctorId = req.body.doctorId;
    const resault = await Booking.findAll({where : {doctorId : doctorId , status : "pending"}});
    return res.status(200).json(resault);
};
exports.doctorHistory = async (req, res) => {
    try {
        if(req.user.userType == 'doctor'){
        const doctorId = req.user.id;
        const resualt = await Booking.findAll({where:{doctorId : doctorId}})
        res.status(201).json(resualt);
        }
        else{
            return res.status(401).json('unauthorized request');
        }
      } catch (err) {
        return res.status(500).json(err);
      }

};

exports.userHistory = async (req, res) => {
    try {
        if(req.user.userType == 'user'){
        const userId = req.user.id;
        const resualt = await Booking.findAll({where:{userId : userId}})
        res.status(201).json(resualt);
        }
        else{
            return res.status(401).json('unauthorized request');
        }
      } catch (err) {
        return res.status(500).json(err);
      }

};
