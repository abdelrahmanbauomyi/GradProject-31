const jwt = require('jsonwebtoken');
const { sequelize, User } = require('../models');

const authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_STRING);
    const user = await User.findOne({ where: { id: decoded._id } });
    if (!user || !user.tokens.includes(token)) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (e) {
    res.status(201).send({ error: 'Please Authenticate!' });
  }
};

module.exports = authUser;
