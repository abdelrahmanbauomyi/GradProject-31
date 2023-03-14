const jwt = require('jsonwebtoken');
const { sequelize, User } = require('../models');

const authUser = async (req, res, next) => {
    try{
        debugger;
        const token = req.cookies.token;
        const decoded = jwt.verify(token, process.env.JWT_STRING);
        const id = decoded._id;
        const user = await User.findOne({where: {id: decoded._id}});
        if(!user){
            throw new Error()
        }
        req.user = user;
        next()
    }catch(e){
        res.status(201).send({'error': 'Please Authenticate!'});
    }
};

module.exports = authUser;