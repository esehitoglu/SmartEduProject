const express = require('express')
const userController = require('../controllers/authController')

const router = express.Router()

router.post('/signup',userController.createUser)
router.post('/login',userController.loginUser)
router.get('/logout',userController.logoutUser)

module.exports = router