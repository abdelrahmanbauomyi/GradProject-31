const { sequelize, Booking, User, Doctor } = require('../models');
const Sequelize = require('sequelize');
const dayjs = require('dayjs');
exports.appoitmentStartChecker = async()=>{
    const now = addHoursToDate(new Date,1)
    const appoitment=await Booking.update({
        status:'ongoing'
    },{
        where:{
            [Sequelize.Op.and]:[{
            startTime:{
                [Sequelize.Op.lte]:now
            }},
            {
                status:'reserved'
            }
        ]
        }
    })
    console.log("ALIVE")
    console.log(appoitment) ;
}
exports.appoitmentEndChecker = async()=>{
    const now = addHoursToDate(new Date,1)
    const appoitment=await Booking.update({
        status:"Finished"
    },{

        where:{
            [Sequelize.Op.and]:[{
            endTime:{
                [Sequelize.Op.lte]:now
            }},
            {
                status:'ongoing'
            }
        ]
        }
    })
    console.log("ALIVE")
    console.log(appoitment) ;
}

exports.appoitmentExpirationChecker = async()=>{
    const now = addHoursToDate(new Date,1)
    const appoitment=await Booking.update({
        status:'expired'
    },{
        where:{
            [Sequelize.Op.and]:[{
            startTime:{
                [Sequelize.Op.lte]:now
            }},
            {
                status:'pending'
            }
        ]
        }
    })
    console.log("ALIVE")
    console.log(appoitment) ;
}

exports.appoitmentExpirationDelete = async()=>{
    const now = addHoursToDate(new Date,1)
    const appoitment=await Booking.delete(
        {
            where:{
                status : "expired"
            }
        }
    )
    console.log("ALIVE")
    console.log(appoitment) ;
}
function addHoursToDate(date, hours) {
    return new Date(new Date(date).setHours(date.getHours() + hours));
  }