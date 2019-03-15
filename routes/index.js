var express = require('express');
var router = express.Router();
var Post = require('../models/Post');
var loggedin = function (req, res, next) {
  if (req.isAuthenticated()) {
      next()
  } else {
      res.redirect('/users/login');
  }
}

/* GET home page. */
router.get('/',loggedin ,function(req, res, next) {
  Post.find({}).sort('-date').exec(function(err, foundPosts){
    if(err){
      res.send(err);
    }
    else{
      res.render('index',{posts:foundPosts});
    }
  });
  
});



module.exports = router;
