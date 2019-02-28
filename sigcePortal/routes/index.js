var express = require('express');
var router = express.Router();
var Post = require('../models/Post');

/* GET home page. */
router.get('/', function(req, res, next) {
  Post.find({}, (err,foundPosts)=>{
    if(err){
      res.send(err);
    }else{
      res.render('index',{posts:foundPosts});
    }
  });
  
});



module.exports = router;
