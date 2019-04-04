var express = require('express');
var router = express.Router();
var M3 = require('../models/ComputerModels/M3');
var DIS = require('../models/ComputerModels/DIS');
var DS = require('../models/ComputerModels/DS');
var DLDA = require('../models/ComputerModels/DLDA');
var ECCF = require('../models/ComputerModels/ECCF');
var M4 = require('../models/ComputerModels/M4');
var AOA = require('../models/ComputerModels/AOA');
var OS = require('../models/ComputerModels/OS');
var CG = require('../models/ComputerModels/CG');

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

router.post('/eccf', (req, res) => {
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
});

//sem 4
router.get('/m4', (req, res) => {
    M4.find({}).sort('-date').exec(function (err, foundPosts) {
        if (err) {
            res.send(err);
        } else {
            res.render('computer/m4', {
                posts: foundPosts
            });
        }
    });
});

router.post('/m4', (req, res) => {
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
    M4.create(newPost, (err, createdPost) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/computercourses/m4');
        }
    });
});

router.get('/aoa', (req, res) => {
    AOA.find({}).sort('-date').exec(function (err, foundPosts) {
        if (err) {
            res.send(err);
        } else {
            res.render('computer/aoa', {
                posts: foundPosts
            });
        }
    });
});

router.post('/aoa', (req, res) => {
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
    AOA.create(newPost, (err, createdPost) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/computercourses/aoa');
        }
    });
});

router.get('/coa', (req, res) => {
    COA.find({}).sort('-date').exec(function (err, foundPosts) {
        if (err) {
            res.send(err);
        } else {
            res.render('computer/coa', {
                posts: foundPosts
            });
        }
    });
});

router.post('/coa', (req, res) => {
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
    COA.create(newPost, (err, createdPost) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/computercourses/coa');
        }
    });
});

router.get('/os', (req, res) => {
    OS.find({}).sort('-date').exec(function (err, foundPosts) {
        if (err) {
            res.send(err);
        } else {
            res.render('computer/os', {
                posts: foundPosts
            });
        }
    });
});

router.post('/os', (req, res) => {
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
    OS.create(newPost, (err, createdPost) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/computercourses/os');
        }
    });
});

router.get('/cg', (req, res) => {
    CG.find({}).sort('-date').exec(function (err, foundPosts) {
        if (err) {
            res.send(err);
        } else {
            res.render('computer/cg', {
                posts: foundPosts
            });
        }
    });
});

router.post('/cg', (req, res) => {
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
    CG.create(newPost, (err, createdPost) => {
        if (err) {
            res.send(err);
        } else {
            res.redirect('/computercourses/cg');
        }
    });
});



module.exports = router;