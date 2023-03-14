const express = require('express');
const router = express.Router();
const authUser = require('../Handlers/authUser');
const userHandler = require('../Handlers/userHandler');

//Requests at /users

router.get('/users', userHandler.getUsers);
router.get('/users', authUser, userHandler.authTest);
router.post('/users', userHandler.postUser);



//Request at /login
router.get('/login', userHandler.loginUser);

module.exports = router;
