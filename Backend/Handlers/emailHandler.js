const { sequelize, User } = require('../models');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

exports.verifyEmail = async (req, res, next) => {
  try {
    const token = req.params.token;
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_STRING);
    const user = await User.findOne({ where: { id: decoded._id } });
    console.log(user);
    await User.update({ confirmed: true }, { where: { id: decoded._id } });
    res.status(200).send('email has been verified');
  } catch (err) {
    res.send(err);
  }
};
exports.sendVerificationEmail = async (email, urlToken) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  await transporter.sendMail({
    from: 'Our Online Clinc',
    to: email,
    subject: 'Verify your email address',
    html: `please click this url to confirm your email address : <a href=${urlToken}>${urlToken}</a>`,
  });
};
