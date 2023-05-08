const express = require('express');
const router = express.Router();
const authUser = require('../Handlers/authUser');
const userHandler = require('../Handlers/userHandler');
const emailHandler = require('../Handlers/emailHandler');
const doctorHandler = require('../Handlers/doctorHandler');
const imageHandler = require('../Handlers/imgHandler');
const qaHandler = require('../Handlers/qaHandler');
const bookingHandler = require('../Handlers/bookingHandler');
const faqHandler = require('../Handlers/faqHandler');
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

router.get('/doctors/search', doctorHandler.searchDoctors);
router.get('/doctors/:id', doctorHandler.getDoctor);
router.delete('/doctors', authUser, doctorHandler.deleteDoctor);
router.patch('/doctors/edit', authUser, doctorHandler.Edit);


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

//Booking routes
router.post('/booking/addappointment', authUser, bookingHandler.addAppointment);
router.post(
  '/booking/reservappointment',
  authUser,
  bookingHandler.reserveAppointment
);
router.delete(
  '/booking/deleteappointment',
  authUser,
  bookingHandler.deleteAppointment
);
router.get('/booking/available', bookingHandler.showAvailable);

//email routes
router.get('/confirmation/:token', emailHandler.verifyEmail);

//qa routes
router.get('/qa', qaHandler.getAllQA);
router.get('/qa/:id', qaHandler.getQA);
router.post('/qa' , authUser , qaHandler.createQA);
router.post('/qa/:id' , authUser , qaHandler.postAnswer);

//faq routes
router.get('/faq', faqHandler.getAllFAQ);
router.post('/faq', faqHandler.createFAQ);

module.exports = router;
