const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const UserModel = require('../models/UserSchema.js');
const PostModel =require('../models/PostSchema.js')
const { v4: uuidv4 } = require('uuid');

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
        postMessage:req.body.postMessage,
        postId:uuidv4()
    })
    UserModel.find({ $and: [{ userEmail: req.body.userEmail }, { userName: req.body.userName }] })
    .then((result)=>{
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

router.put('/updateLikes/:postId', (req, res) => {
    const postId = req.params.postId;
    PostModel.findOne({ postId })
      .then((post) => {
        if (!post) {
          return res.status(404).json({ success: false, message: 'Post not found' });
        }
        post.likes += 1;
        post.save()
          .then((updatedPost) => {
            res.send(updatedPost);
          })
          .catch((err) => {
            console.log({ message: err.message });
            res.status(500).json({ success: false, message: 'Internal Server Error' });
          });
      })
      .catch((err) => {
        console.log({ message: err.message });
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      });
  });
  
  router.get('/getPostByEmail/:email',(req,res)=>{
    PostModel.find({userEmail:req.params.email})
    .then((result)=>{
        if(result.length>0){
            res.send(result)
        }
        else{
            res.send([])
        }

    }).catch((err) => {
        console.log({ message: err.message });
        res.status(500).json({ success: false, message: 'Internal Server Error' });
      });
  })

  router.delete('/deleteuserpost/:userEmail/:postId', (req, res) => {
    const { userEmail, postId } = req.params;
    

    UserModel.findOne({userEmail:userEmail})
    .then((result)=>{
            PostModel.findOneAndDelete({userEmail:userEmail, postId:postId})
            .then((result)=>{
                console.log(result)
                res.send(result)
            }).catch((err) => {
                console.log({ message: err.message });
                res.status(500).send({ message: 'Internal Server Error' });
            });
        
    }).catch((err) => {
        console.log({ message: err.message });
        res.status(500).send({ message: 'Internal Server Error' });
    });

    
});

module.exports = router;