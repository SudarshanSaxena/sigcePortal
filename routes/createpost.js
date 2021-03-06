var express = require('express');
var router = express.Router();
var Post = require('../models/Post');
var mongoose = require('mongoose');
var Post = require('../models/Post');


router.get('/', (req, res) => {
    res.render('createpost');
});

router.post('/', (req, res) => {

    if (req.user.usersRole != 'admin') {
        res.send("Unauthorized Action!");
    } else {
        var title = req.body.postTitle;
        var body = req.body.postBody;
        var author = {
            id: req.user._id,
            username: req.user.username,
            usersName: req.user.usersName
        }
        var newPost = {
            title: title,
            body: body,
            author: author
        };
        Post.create(newPost, (err, createdPost) => {
            if (err) {
                res.send(err);
            } else {
                res.redirect('/');
            }
        })
    }



})


module.exports = router;