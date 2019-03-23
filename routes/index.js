var express = require('express');
var router = express.Router();
var Post = require('../models/Post');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.user);
  Post.find({}).sort('-date').exec(function(err, foundPosts){
    if(err){
      res.send(err);
    }
    else{
      res.render('index', {posts:foundPosts, currentUser: req.user});
    }
  });
  
});



module.exports = router;
