var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', function (req, res) {
    req.logout();
    res.redirect('/users/login');
});

module.exports = router;