const express = require('express')
const userController = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

router.post('/signup',userController.createUser)
router.post('/login',userController.loginUser)
router.get('/logout',userController.logoutUser)
router.get('/dashboard',authMiddleware , userController.getDashboardPage)

module.exports = router