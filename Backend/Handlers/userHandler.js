const { sequelize, User } = require('../models')

//GET Logic
exports.getUsers = (req , res) =>{
    User.findAll()
    .then( users =>{
        res.status(200).json(users)

    })
    .catch(err => {
        console.log(err)
        res.status(400).json(err)
    })
}

//POST logic
exports.postUser = async (req, res) => {   
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
  }