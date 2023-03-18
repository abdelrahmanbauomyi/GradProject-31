const express = require('express');
const router = express.Router();
const authUser = require('../Handlers/authUser');
const userHandler = require('../Handlers/userHandler');
const emailHandler = require('../Handlers/emailHandler');
//Requests at /users

// router.get('/users',userHandler.getUsers); for the admin only
router.get('/auth', authUser, userHandler.authTest); //test for the authentication method

//CRUD routes
router.post('/users', userHandler.createUser);
router.delete('/users', authUser, userHandler.Delete);
router.get('/users', authUser, userHandler.getUserInfo);
router.patch('/users/edit', authUser, userHandler.Edit); // gives an error !!!!!!!!!!!!!!!!!

//login & logouts routes
router.get('/login', userHandler.loginUser);
router.post('/logout', authUser, userHandler.logout);
router.post(
  '/logoutFromAllDevices',
  authUser,
  userHandler.logoutFromAllDevices
);

//email routes
router.get('/confirmation/:token', emailHandler.verifyEmail);

module.exports = router;
