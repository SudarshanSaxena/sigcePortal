var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('electronicscourses');
});


module.exports = router;