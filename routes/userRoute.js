const express = require('express')
const userController = require('../controllers/authController')
const authMiddleware = require('../middlewares/authMiddleware')
const { body } = require('express-validator')
const User = require('../models/User')


const router = express.Router()

router.post('/signup',
[
    body('name').not().isEmpty().withMessage('Please enter your name'),
    body('email').isEmail().withMessage("Please enter valid email")
    .custom( (userEmail) =>{
        return User.findOne( {email:userEmail} ).then(user =>{
            if(user){
                return Promise.reject('Email is already exists!')
            }
        })
    } ),
    
    body('password').not().isEmpty().withMessage('Please enter password')
],
userController.createUser)
router.post('/login',userController.loginUser)
router.get('/logout',userController.logoutUser)
router.get('/dashboard',authMiddleware , userController.getDashboardPage)
router.delete('/:id',userController.deleteUser)


module.exports = router