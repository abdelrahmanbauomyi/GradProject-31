const jwt = require('jsonwebtoken');
const { sequelize, User, Doctor } = require('../models');

const authUser = async (req, res, next) => {
  try {
    /*
    if(req.query && (req.query.verified == process.env.SECRET_PAYMENT_CHECK)){
      req.verified = true;
      req.appointmentId = +req.query.appointmentId;
      req.userId = +req.query.userId;
      next();
    }
    */
    debugger;
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_STRING);
    if (decoded.userType == 'user') {
      const user = await User.findOne({ where: { id: decoded._id } });
      if (!user || !user.tokens.includes(token)) {
        throw new Error();
      }
      req.user = user;
      req.user.userType = 'user';
      console.log('Authenticated as user');
      next();
    } else if (decoded.userType == 'doctor') {
      const user = await Doctor.findOne({ where: { id: decoded._id } });
      if (!user || !user.tokens.includes(token)) {
        throw new Error();
      }
      req.user = user;
      req.user.userType = 'doctor';
      next();
    } else {
      throw new Error('Invalid User Type');
    }
  } catch (e) {
    res.status(201).send({ error: 'Please Authenticate!' });
  }
};

module.exports = authUser;
