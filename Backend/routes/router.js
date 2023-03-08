const express = require('express')
const router = express.Router()
const userHandler = require('../Handlers/userHandler')



//GET Request at /users


router.get('/' , userHandler.getUsers)

//POST Request at /users


router.post('/', userHandler.postUser );


module.exports = router


