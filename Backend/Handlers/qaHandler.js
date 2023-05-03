const { sequelize, qa } = require('../models');
const { where } = require('sequelize');

//POST

exports.createQA = async (req, res) => {
  try {
    const info = {
      title: req.body.title,
      question: req.body.question,
      answers: req.body.answers,
    };
    const entry = await qa.create(info);
    console.log(entry);
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
    const entry = await qa.findByPk(qaId);
    res.status(200).json(entry);
  } catch (err) {
    return res.status(500).json(err);
    console.log(err);
  }
};

//PATCH

exports.updateQA = async (req, res) => {
  try {
    const qaId = req.params.id;
    const answer = [req.body.answer];
    console.log('here');
    console.log(req.user);
    const entry = await qa.findByPk(qaId);
    entry.answers = entry.answers.concat(answer);
    await entry.save();
    res.status(200).json(entry);
  } catch (err) {
    return res.status(500).json(err);
  }
};
