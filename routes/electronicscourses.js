var express = require('express');
var router = express.Router();

var loggedin = function (req, res, next) {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect('/users/login');
    }
}

router.get('/',loggedin ,(req, res) => {
    res.render('electronicscourses');
});


module.exports = router;