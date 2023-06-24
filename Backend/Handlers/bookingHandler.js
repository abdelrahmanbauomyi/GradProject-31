const dayjs = require('dayjs');
const stripe = require('stripe')(process.env.STRIPE_KEY);
const { sequelize, Booking, User, Doctor } = require('../models');
const { where } = require('sequelize');
//doctor methods
exports.addAppointment = async (req, res) => {
  try {
    if (req.user.userType == 'doctor') {
      let startTime = dayjs(req.body.startTime);
      let endTime = dayjs(req.body.endTime);
      const oldTiming = dayjs(); //GMT+2
      const now = oldTiming.add(1, 'h'); //GMT+3
      if (startTime < now || endTime < now || startTime > endTime) {
        console.log(startTime, endTime, now);
        return res.status(400).json('Bad request');
      }
      let diff = Math.abs(startTime - endTime);
      let Duration = req.body.duration * 60000; // duration in milliseconds
      let numberOfTimeSlots = Math.floor(diff / Duration);
      let arr = [];
      const doctorId = req.user.id;
      while (numberOfTimeSlots--) {
        endTime = startTime.add(req.body.duration, 'm');

        arr.push({
          startTime: startTime,
          endTime: endTime,
          DoctorId: doctorId,
        });
        startTime = endTime;
      }
      const booking = await Booking.bulkCreate(arr);
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

      const statusOrder = ['ongoing', 'reserved', 'pending', 'Finished'];
      const statusComparator = (a, b) => {
        const aIndex = statusOrder.indexOf(a.status);
        const bIndex = statusOrder.indexOf(b.status);
        return aIndex - bIndex;
      };
      resualt.sort(statusComparator);

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
exports.payAppointment = async (req, res) => {
  try {
    if (req.user.userType == 'user') {
      const userId = req.user.id;
      const a_Id = req.body.appointmentId;
      const result = await Booking.update(
        { UserId: userId, status: 'pending Payment' },
        { where: { appointmentId: a_Id } }
      );
      const appointment = await Booking.findByPk(a_Id);
      const doctorId = appointment.DoctorId;
      const doctor = await Doctor.findByPk(doctorId);
      const line_items = [
        {
          price_data: {
            currency: 'egp',
            product_data: {
              name: 'appointment with Dr ' + doctor.Dname,
              description: doctor.speciality,
            },
            unit_amount: doctor.fees * 100,
          },
          quantity: 1,
        },
      ];
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items,
        success_url: `${req.protocol}://${req.get(
          'host'
        )}/checkout-success?verified=${
          process.env.SECRET_PAYMENT_CHECK
        }&appointmentId=${a_Id}&userId=${userId}`,
        cancel_url: `${req.protocol}://${req.get('host')}/checkout-cancel`,
      });

      res.status(303).json({ url: session.url });
    } else {
      return res.status(401).json('unauthorized request');
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

//still needs to be tested
/*
exports.reserveAppointment = async (req, res) => {
  try {
    if(req.verified){
      const a_Id = req.appointmentId;
      const userId = req.userId;
      const result = await Booking.update(
        {UserId: userId ,  status: 'reserved' },
        { where: { appointmentId: a_Id } }
      );

      res.status(201).json('reserved');
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
*/
exports.reserveAppointment = async (req, res) => {
  try {
    if (req.user.userType == 'user') {
      const userId = req.user.id;
      const a_Id = req.body.appointmentId;
      const result = await Booking.update(
        { UserId: userId, status: 'reserved' },
        { where: { appointmentId: a_Id } }
      );
      if (result == false) {
        res.status(404).json('appointment not found');
      }
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
      const statusOrder = ['ongoing', 'reserved', 'pending', 'Finished'];
      const statusComparator = (a, b) => {
        const aIndex = statusOrder.indexOf(a.status);
        const bIndex = statusOrder.indexOf(b.status);
        return aIndex - bIndex;
      };
      resualt.sort(statusComparator);
      res.status(200).json(resualt);
    } else {
      return res.status(401).json('unauthorized request');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};
