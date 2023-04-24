const express = require('express');
const router = express.Router();
const authUser = require('../Handlers/authUser');
const userHandler = require('../Handlers/userHandler');
const emailHandler = require('../Handlers/emailHandler');
const doctorHandler = require('../Handlers/doctorHandler');
const imageHandler = require('../Handlers/imgHandler');
//Requests at /users

// router.get('/users',userHandler.getUsers); for the admin only
router.get('/auth', authUser, userHandler.authTest); //test for the authentication method

//users CRUD routes
router.post('/users', userHandler.createUser);
router.delete('/users', authUser, userHandler.Delete);
router.get('/users', authUser, userHandler.getUserInfo);
router.patch('/users/edit', authUser, userHandler.Edit);

//doctors CRUD routes
router.post(
  '/doctors',
  imageHandler.upload.single('img'),
  doctorHandler.createDoctor
);
router.get('/doctors', doctorHandler.getDoctor)
router.delete('/doctors', doctorHandler.deleteDoctor)
router.get('/doctors/search', doctorHandler.searchDoctors)
router.patch('/doctors/edit', authUser, doctorHandler.Edit)

//login & logouts routes
router.post('/users/login', userHandler.loginUser);
router.post('/users/logout', authUser, userHandler.logout);
router.post(
  '/users/logoutFromAllDevices',
  authUser,
  userHandler.logoutFromAllDevices
);
router.post('/doctors/login', doctorHandler.loginDoctor);
router.post('/doctors/logout', authUser, doctorHandler.logout);
router.post(
  '/doctors/logoutFromAllDevices',
  authUser,
  doctorHandler.logoutFromAllDevices
);

//email routes
router.get('/confirmation/:token', emailHandler.verifyEmail);

module.exports = router;
