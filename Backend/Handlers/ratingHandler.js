const { sequelize, Booking, Doctor ,User } = require('../models');
const { where,Op } = require('sequelize');

exports.createReview = async (req, res, next) => {
  try {
    if (req.user.userType == 'user') {
      const info = {
        ID: req.body.appointmentID,
        status: req.body.status,
        rating: req.body.rating,
        comment: req.body.comment,
        DoctorID: req.body.DoctorId,
      };
      if (info.status === 'finished') {
        const result = await Booking.update(
          {
            rating: info.rating,
            comment: info.comment,
          },
          {
            where: {
              appointmentId: info.ID,
            },
          }
        );
        const doctor = await Doctor.findByPk(info.DoctorID, {
          attributes: ['rating', 'reviewers'],
        });
        console.log(doctor.rating, doctor.reviewers);
        const rating = (
          (doctor.rating * doctor.reviewers + Number(info.rating)) /
          (doctor.reviewers + 1)
        ).toFixed(2);
        const reviewers = doctor.reviewers + 1;
        console.log(rating, reviewers);
        const result2 = await Doctor.update(
          {
            reviewers: reviewers,
            rating: rating,
          },
          {
            where: {
              id: info.DoctorID,
            },
          }
        );
        // console.log(await Doctor.findByPk(info.DoctorID,{attributes: ['rating', 'reviewers']}));
        res.status(200).send(result);
      } else {
        res.status(401).json('unauthorized request');
      }
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
exports.getBestReviews = async(req,res)=>{
  try{
    const rev = await Booking.findAll({
      where:{
        rating:{
          [Op.not]:null
        }
      },
      order:[['rating','DESC']],
      limit : 10,
      attributes: ['rating','comment'],
      include: [
        {
          model: Doctor,
          attributes: ['Dname'],
        },
        {
          model: User,
          attributes: ['firstName','lastName'],
        }
      ],
     
      }
    )
    res.status(200).send(rev);
  }
  catch(err){
    return res.status(500).json(err);
  }
}
