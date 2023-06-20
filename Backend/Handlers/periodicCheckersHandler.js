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
            
            endTime:{
                [Sequelize.Op.lt]:now
            }
        }
    })
    console.log("ALIVE")
    console.log(appoitment) ;
}
function addHoursToDate(date, hours) {
    return new Date(new Date(date).setHours(date.getHours() + hours));
  }