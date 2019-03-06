var express = require('express');
var router = express.Router();
var M3 = require('../models/ComputerModels/M3');

router.get('/', (req, res) => {
    res.render('computercourse');
});

//sem 3
router.get('/m3', (req, res) => {
    M3.find({}).sort('-date').exec(function(err, foundPosts){
        if(err){
          res.send(err);
        }
        else{
          res.render('computer/m3', {posts:foundPosts});
        }
      });
});

router.post('/m3', (req, res) => {
    var title = req.body.postTitle;
    var body = req.body.postBody;
    var newPost = {title:title,body:body};
    M3.create(newPost,(err,createdPost)=>{
        if(err){
            res.send(err);
        }else{
            res.redirect('/computercourses/m3');
        }
    })
})

router.get('/ds', (req, res) => {
    res.render('computer/ds')
});

router.get('/dlda', (req, res) => {
    res.render('computer/dlda')
});

router.get('/dis', (req, res) => {
    res.render('computer/dis')
});

router.get('/eccf', (req, res) => {
    res.render('computer/eccf')
});


module.exports = router;