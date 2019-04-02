var express = require('express');
var router = express.Router();
var M3 = require('../models/ComputerModels/M3');
var DIS = require('../models/ComputerModels/DIS');
var DS = require('../models/ComputerModels/DS');
var DLDA = require('../models/ComputerModels/DLDA');
var ECCF = require('../models/ComputerModels/ECCF');

router.get('/', (req, res) => {
    res.render('computercourse');
});

//sem 3
router.get('/m3', (req, res) => {
    M3.find({}).sort('-date').exec(function (err, foundPosts) {
        if (err) {
            res.send(err);
        } else {
            res.render('computer/m3', {
                posts: foundPosts
            });
        }
    });
});

router.post('/m3', (req, res) => {
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
    M3.create(newPost, (err, createdPost) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/computercourses/m3');
        }
    });
});

router.get('/ds', (req, res) => {
    DS.find({}).sort('-date').exec(function (err, foundPosts) {
        if (err) {
            res.send(err);
        } else {
            res.render('computer/ds', {
                posts: foundPosts
            });
        }
    });
});

router.post('/ds', (req, res) => {
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
    DS.create(newPost, (err, createdPost) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/computercourses/ds');
        }
    });
})



router.get('/dlda', (req, res) => {
    DLDA.find({}).sort('-date').exec(function (err, foundPosts) {
        if (err) {
            res.send(err);
        } else {
            res.render('computer/dlda', {
                posts: foundPosts
            });
        }
    });
});

router.post('/dlda', (req, res) => {
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
    DLDA.create(newPost, (err, createdPost) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/computercourses/dlda');
        }
    });
})

router.get('/dis', (req, res) => {
    DIS.find({}).sort('-date').exec(function (err, foundPosts) {
        if (err) {
            res.send(err);
        } else {
            res.render('computer/dis', {
                posts: foundPosts
            });
        }
    });
});

router.post('/dis', (req, res) => {
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
    DIS.create(newPost, (err, createdPost) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/computercourses/dis');
        }
    });
})

router.get('/eccf', (req, res) => {
    ECCF.find({}).sort('-date').exec(function (err, foundPosts) {
        if (err) {
            res.send(err);
        } else {
            res.render('computer/eccf', {
                posts: foundPosts
            });
        }
    });
});

router.post('/eccf', (req,res)=>{
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
    ECCF.create(newPost, (err, createdPost) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/computercourses/eccf');
        }
    });
})


module.exports = router;