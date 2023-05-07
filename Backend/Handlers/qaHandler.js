const { sequelize, qa , User , Answers , Doctor } = require('../models');
const { where, DATE } = require('sequelize');
const dayjs = require('dayjs');
const { model } = require('mongoose');

//POST

exports.createQA = async (req, res) => {
  try {
    const info = {
      title: req.body.title,
      question: req.body.question,
      UserId : req.user.id,
    };
    const entry = await qa.create(info);
    return res.status(201).json(entry);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

//GET ALL

exports.getAllQA = async (req, res) => {
  try {
    const entries = await qa.findAll();
    res.status(200).json(entries);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//GET BY ID

exports.getQA = async (req, res) => {
  try {
    const qaId = req.params.id;
     const entry = await qa.findOne({
      where:{
        qaId : qaId 
      },
    include:[{
      model: Answers,
      attributes: {exclude:['qaId' , 'DoctorId']},
      include:[{
        model: Doctor,
        attributes: ['Dname' , 'title' , 'rating' , 'speciality']

      }
      ]
    },
   {
     model : User,
        attributes : ['firstName' , 'lastName']
      }
  ]
     })


    res.status(200).json(entry);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};


exports.postAnswer = async (req, res) => {
  try {
    if(req.user.userType == 'doctor'){
      const info = {
        qaId: req.params.id,
        DoctorId : req.user.id,
        answerContent : req.body.answer
      }
      const answerEntry = await Answers.create(info)
      res.status(200).json(answerEntry);
    }
    else{
      res.send('Not Authorized')
    }

  } catch (err) {
    console.log(err)
    return res.status(500).json(err);
  }
};
