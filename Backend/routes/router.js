const express = require('express');
const router = express.Router();
const authUser = require('../Handlers/authUser');
const userHandler = require('../Handlers/userHandler');

//GET Request at /users

router.get('/', userHandler.getUsers);
router.get('/login', userHandler.loginUser);
router.get('/user', authUser, userHandler.authTest);

//POST Request at /users

router.post('/', userHandler.postUser);

module.exports = router;
