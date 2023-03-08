const express = require('express')
const router = express.Router()
const { sequelize, User } = require('../models')



//GET Request at /users


router.get('/' , (req , res) =>{
    User.findAll()
    .then( users =>{
        res.status(200).json(users)

    })
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
})

//POST Request at /users


router.post('/', async (req, res) => {   
    try {  
      const  {
        firstName,  
        lastName,
        password,
        email,
        dob,
        gender,  
        mobilenumber,

      } = req.body;
      const user = await User.create({
         firstName,
        lastName,
        password,
        email,
        dob,
        gender,
        mobilenumber,
      });

      return res.status(201).json(user);
    } 
    catch (err) {
      return res.status(500).json(err);
    }
  });


module.exports = router


