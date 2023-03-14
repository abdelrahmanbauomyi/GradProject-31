const { sequelize, User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const { where } = require('sequelize');
const { BCRYPT_PASSWORD, SALT_ROUNDS } = process.env;
//GET Logic
exports.getUsers = (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};
//LOGIN BY EMAIL
exports.loginUser = async (req, res) => {
  try {
    debugger;
    let email = req.body.email;
    let upass = req.body.password;
    const user = await User.findOne({ where: { email: email } });
    if (user !== null) {
      const valid = await bcrypt.compare(
        upass + BCRYPT_PASSWORD,
        user.dataValues.password
      );
      if (valid === true) {
        const token = jwt.sign({ _id: user.id }, process.env.JWT_STRING);
        res.cookie('token', token, {
          httpOnly: true, 
          // secure: true, set this on production
          sameSite: 'strict',
        });
        res.status(200).json(user);
      } else {
        res.status(400).send('invalid email or password');
      }
    } else {
      res.status(400).send('invalid email or password');
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

//POST logic
exports.postUser = async (req, res) => {
  try {
    const json = ({
      firstName,
      lastName,
      password,
      email,
      dob,
      gender,
      mobilenumber,
    } = req.body);
    json.password = bcrypt.hashSync(
      json.password + BCRYPT_PASSWORD,
      parseInt(SALT_ROUNDS)
    );

    const user = await User.create(json);
    const token = jwt.sign({_id: user._id}, process.env.JWT_STRING);
    res.cookie('token', token, {
      httpOnly: true, 
      // secure: true, set this on production
      sameSite: 'strict',
    });
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// Dummy request for authentication middleware testing
exports.authTest = async (req, res) => {
  try{
    debugger
    res.status(200).send(req.user);
  }catch(e){
    res.send({"error": e});
  }
}