const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const UserModel = require('../models/UserSchema.js');
const PostModel =require('../models/PostSchema.js')

router.post('/userreg', (req, res) => {
    bcrypt.hash(req.body.userPassword, 10)
        .then((encpass) => {
            const userObj = new UserModel({
                userName: req.body.userName,
                userEmail: req.body.userEmail,
                userPhone: req.body.userPhone,
                userPassword: encpass,
            })
            UserModel.find({ $or: [{ userEmail: req.body.userEmail }, { userPhone: req.body.userPhone }] })
                .then((result) => {
                    if (result.length > 0) {
                        res.send([])
                    }
                    else {
                        userObj.save()
                            .then((result) => {
                                res.send(result)
                            }).catch((err) => {
                                console.log({ message: err.message })
                            })
                    }
                }).catch((err) => {
                    console.log({ message: err.message })
                })
        })

})

router.post("/userlogin", (req, res) => {
    UserModel.find({ userEmail: req.body.userEmail })
        .then((result) => {
            if (result.length > 0) {
                let collectedPass = req.body.userPassword;
                let storedPass = result[0].userPassword;
                bcrypt.compare(collectedPass, storedPass)
                    .then((passMatch) => {
                        if (passMatch == true) {
                            res.send(result)
                        }
                        else {
                            res.send([])
                        }
                    }).catch((err) => {
                        console.log({ message: err.message })
                    })
            }
            else {
                res.send([])
            }
        }).catch((err) => {
            console.log({ message: err.message })
        })
})

router.post('/addPost',(req,res)=>{
    const postObj=new PostModel({
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        postMessage:req.body.postMessage
    })
    UserModel.find({ $and: [{ userEmail: req.body.userEmail }, { userName: req.body.userName }] })
    .then((result)=>{
        console.log(result)
        if(result.length>0){
            postObj.save()
            .then((result)=>{
                res.send(result)
        
            }).catch((err) => {
                console.log({ message: err.message })
            })
        }
        else{
            res.send([])
        }
    }).catch((err) => {
        console.log({ message: err.message })
    })
    
})
router.get('/getAllPosts',(req,res)=>{
    PostModel.find()
    .then((result)=>{
        if(result.length>0){
            res.send(result)
        }
        else{
            res.send([])
        }
    }).catch((err) => {
        console.log({ message: err.message })
    })
})
module.exports = router;