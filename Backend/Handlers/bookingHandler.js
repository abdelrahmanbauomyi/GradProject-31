const { sequelize, Booking } = require('../models');
const jwt = require("jsonwebtoken");

exports.addAppoitment=async(req,res)=>{
try{
    const json = ({date,startTime,endTime}=req.body);
    //get doctor id from token
    const doctorId= req.user.id ; 
    json.doctorId=doctorId;
    const booking = await Booking.create(json);
    return res.status(201).json(booking)
}
catch(err){
    return res.status(500).json(err)
}
}
exports.reserveAppoitment=async(req,res)=>{
    try{
        const userId= req.user.id;
        const a_Id=req.body.appoitmentId;
        
    }
    catch(err){

    }
}
exports.deleteAppoitment=async(req,res)=>{

}
exports.showAll=async(req,res)=>{

}
exports.showForDoctor=async(req,res)=>{

}
exports.showForUser=async(req,res)=>{

}


