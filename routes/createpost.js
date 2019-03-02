var express = require('express');
var router = express.Router();
var Post = require('../models/Post');
var mongoose = require('mongoose');
var Post = require('../models/Post');


router.get('/', (req, res) => {
    res.render('createpost');
});

router.post('/', (req,res) => {
    var title = req.body.postTitle;
    var body = req.body.postBody;
    var newPost = {title:title,body:body};
    Post.create(newPost,(err,createdPost)=>{
        if(err){
            res.send(err);
        }else{
            res.redirect('/');
        }
    })
    
})


module.exports = router;