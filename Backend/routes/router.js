const express = require('express');
const router = express.Router();
const authUser = require('../Handlers/authUser');
const userHandler = require('../Handlers/userHandler');

//Requests at /users

router.get('/users', userHandler.getUsers);
router.get('/auth', authUser, userHandler.authTest);
router.post('/users', userHandler.postUser);

// Requqest for edit and delete user
// dummy urls for simple tests
// router.get('/users/delete', authUser, userHandler.authTest);
router.get('/users/edit', userHandler.getEditUser);



//Request at /login
router.get('/login', userHandler.loginUser);

module.exports = router;
