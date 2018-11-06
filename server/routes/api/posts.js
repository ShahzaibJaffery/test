const express = require('express');
const mongoose = require('mongoose');
const Post = require('../models/post');
mongoose.Promise = global.Promise;
const uri = 'mongodb://shahzaib:shahg123@ds153093.mlab.com:53093/vue_express';
mongoose.connect(uri,{useNewUrlParser : true});

const router = express.Router();

//Get Post
router.get('/', async (req , res)=>{
     await Post.find({},(err,data)=>{
        res.send(data);
    })
});

//Post Posts

router.post('/', async (req,res)=>{
    await Post.create({
        text : req.body.text,
        createdAt : new Date()
    },(err,data)=>{
        res.status(201).send(data);
    });
})

//Delete Posts

router.delete('/:id',async (req , res)=>{
    await Post.findOneAndDelete({_id : req.params.id},(err,data)=>{
        res.status(200).send('Successfully deleted :' + data);
    })
});



module.exports = router;

