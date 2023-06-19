const { sequelize, Booking, User, Doctor } = require('../models');
const Sequelize = require('sequelize');
const dayjs = require('dayjs');
exports.appoitmentStartChecker = async()=>{
    const now = dayjs();
    const appoitment=await Booking.findAll({
        where:{
            startTime:{
                [Sequelize.Op.lt]: now
            }
        }
    })
    if(appoitment){
        
    }
}
exports.appoitmentEndChecker = async()=>{

}