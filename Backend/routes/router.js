const express = require('express');
const router = express.Router();
const authUser = require('../Handlers/authUser');
const userHandler = require('../Handlers/userHandler');

//Requests at /users

// router.get('/users',userHandler.getUsers); for the admin only
router.get('/auth', authUser, userHandler.authTest);
router.post('/users', userHandler.postUser);

// Request for edit and delete user all should have the userId passed in the body
// dummy urls for simple tests
router.delete('/users/delete',authUser,userHandler.postDeleteUser);
/* this should open the edit page and fill the 
    the values are 'firstName', 'lastName', 'email', 'gender', 'mobilenumber','dob'
    password wont be shown for security and the other fields are irrelevant user
*/
router.get('/users/edit',authUser, userHandler.getEditUser);
/* after the user edit the data he will send a post request
 */
router.post('/users/edit',authUser,userHandler.postEditUser);


//Request at /login
router.get('/login', userHandler.loginUser);


//confirm email
router.get('/confirmation/:token', userHandler.verifyEmail)

module.exports = router;
