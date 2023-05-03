const { sequelize, faq } = require('../models');
const { where } = require('sequelize');

exports.createFAQ = async (req, res) => {
  try {
    const info = {
      question: req.body.question,
      answer: req.body.answer,
    };
    const entry = await faq.create(info);
    console.log(entry);
    return res.status(201).json(entry);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

//GET ALL
exports.getAllFAQ = async (req, res) => {
  try {
    const entries = await faq.findAll();
    res.status(200).json(entries);
  } catch (err) {
    return res.status(500).json(err);
  }
};
