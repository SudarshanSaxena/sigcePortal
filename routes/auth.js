var express = require('express');
var router = express.Router();
var User = require('../models/User');

module.exports = function (passport) {
    router.post('/register', (req, res) => {
        var username = req.body.username;
        var password = req.body.password;
        var usersName = req.body.usersName;
        var usersRole = req.body.usersRole;
        var usersPhoneNumber = req.body.usersPhone;
        var usersEmail = req.body.usersEmail;
        var usersDepartment = req.body.usersDepartment;
        var usersBatch = req.body.usersBatch;

        User.findOne({
            username: username
        }, function (err, foundUser) {
            if (err) {
                res.status(500).send(err);
            } else {
                if (foundUser) {
                    res.status(500).send('user exist');
                } else {
                    var newUser = new User();
                    newUser.username = username;
                    newUser.password = newUser.hashPassword(password);
                    newUser.usersName = usersName;
                    newUser.usersDepartment = usersDepartment;
                    newUser.usersPhoneNumber = usersPhoneNumber;
                    newUser.usersEmail = usersEmail;
                    newUser.usersBatch = usersBatch;
                    newUser.usersRole = usersRole;

                    newUser.save(function (err, savedUser) {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            res.redirect('/');
                        }
                    })
                }

            }
        })
    });

    router.post('/login',passport.authenticate('local',{
        failureRedirect: '/users/login',
        successRedirect: '/'
    }), (req, res) => {
        res.send('hey');
    })

    return router;
}