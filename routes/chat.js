var express = require("express");
var router = express.Router();
var Users = require("../models/User");

router.get("/", (req, res) => {
  Users.find({}).sort("usersName").exec((err, foundUsers) => {
    if (err) {
      res.send(err);
    } else {
      res.render("chat",{foundUsers:foundUsers});
    }
  });
});

module.exports = router;
