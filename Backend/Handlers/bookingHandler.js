const dayjs = require('dayjs');
const { sequelize, Booking, User, Doctor } = require('../models');
const { where } = require('sequelize');
//doctor methods
exports.addAppointment = async (req, res) => {
  try {
    if (req.user.userType == 'doctor') {
      let startTime = dayjs(req.body.startTime);
      let endTime = dayjs(req.body.endTime);
      const oldTiming = dayjs(); //GMT+2
      const now = oldTiming.add(1,'h')//GMT+3
      if (startTime < now || endTime < now || startTime > endTime) {
        console.log(startTime, endTime, now);
        return res.status(400).json('Bad request');
      }
      let diff = Math.abs(startTime - endTime);
      let Duration = req.body.duration * 60000; // duration in milliseconds
      let numberOfTimeSlots = Math.floor(diff / Duration);
      let arr =[]
      const doctorId = req.user.id;
      while (numberOfTimeSlots--) {
        endTime = startTime.add(req.body.duration, 'm');
        
        arr.push({
          startTime: startTime,
          endTime: endTime,
          DoctorId: doctorId,
        })
        startTime = endTime;
      }      
      const booking = await Booking.bulkCreate(arr)
      res.status(201).json(booking);
    } else {
      return res.status(401).json('unauthorized request');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};
exports.deleteAppointment = async (req, res) => {
  try {
    if (req.user.userType == 'doctor') {
      const doctorId = req.user.id;
      const a_Id = req.body.appointmentId;
      const result = await Booking.destroy({
        where: { appointmentId: a_Id, DoctorId: doctorId },
      });
      if (result) {
        res.status(201).json(result);
      } else {
        res.status(401).json('unauthorized request');
      }
    } else {
      return res.status(401).json('unauthorized request');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};
exports.doctorHistory = async (req, res) => {
  try {
    if (req.user.userType == 'doctor') {
      const doctorId = req.user.id;
      const resualt = await Booking.findAll({
        where: { DoctorId: doctorId },
        include: [
          {
            model: User,
            attributes: [
              'firstName',
              'lastName',
              'dob',
              'gender',
              'mobilenumber',
              'imgPath',
            ],
          },
        ],
      });

      const statusOrder = ["ongoing", "reserved", "pending", "Finished"];
      const statusComparator = (a, b) => {
        const aIndex = statusOrder.indexOf(a.status);
        const bIndex = statusOrder.indexOf(b.status);
        return aIndex - bIndex;
      };
      resualt.sort(statusComparator)

      res.status(200).json(resualt);
    } else {
      return res.status(401).json('unauthorized request');
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
// users methods
exports.reserveAppointment = async (req, res) => {
  try {
    if (req.user.userType == 'user') {
      const userId = req.user.id;
      const a_Id = req.body.appointmentId;
      const result = await Booking.update(
        { UserId: userId, status: 'reserved' },
        { where: { appointmentId: a_Id } }
      );
      res.status(201).json('reserved');
    } else {
      return res.status(401).json('unauthorized request');
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

exports.showAvailable = async (req, res) => {
  try {
    let doctorId = req.body.doctorId;
    const result = await Booking.findAll({
      where: { DoctorId: doctorId, status: 'pending' },
    });
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json(err);
  }
};

exports.userHistory = async (req, res) => {
  try {
    if (req.user.userType == 'user') {
      const userId = req.user.id;
      const resualt = await Booking.findAll({
        where: { UserId: userId },
        include: [
          {
            model: Doctor,
            attributes: [
              'Dname',
              'gender',
              'mobilenumber',
              'imgPath',
              'speciality',
              'rating',
            ],
          },
        ],
      });
      const statusOrder = ["ongoing", "reserved", "pending", "Finished"];
      const statusComparator = (a, b) => {
        const aIndex = statusOrder.indexOf(a.status);
        const bIndex = statusOrder.indexOf(b.status);
        return aIndex - bIndex;
      };
      resualt.sort(statusComparator)
      res.status(200).json(resualt);
    } else {
      return res.status(401).json('unauthorized request');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};
