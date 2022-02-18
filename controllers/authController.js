
const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.createUser = async(req,res) => {
    try{  
        const user = await User.create(req.body)
        res.status(201).json({
            status:'sucess',
            user
        })
    }catch (error){
        res.status(400).json({
            status:'başarısız',
            error
        })
    }
}

exports.loginUser = async(req,res) => {
    
    try{  
        const {email,password} = req.body
        const user = await User.findOne({email} )
        if(user){
            bcrypt.compare(password,user.password,(err,same)=>{
                if(same){
                    //user session
                    req.session.userID = user._id
                    res.status(200).redirect('/')
                }
            })
        }
        else{
            res.status(400).json({
                status:'HATALI GİRİŞ',
            })
        }
    }catch (error){
        res.status(400).json({
            status:'xxx',
            error
        })
    }
}

exports.logoutUser = (req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/')
    })
}