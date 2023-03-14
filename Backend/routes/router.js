const express = require('express');
const router = express.Router();
const authUser = require('../Handlers/authUser');
const userHandler = require('../Handlers/userHandler');

//Requests at /user

router.get('/user', userHandler.getUsers);
router.get('/user', authUser, userHandler.authTest);
router.post('/user', userHandler.postUser);



//Request at /login
router.get('/login', userHandler.loginUser);

module.exports = router;
