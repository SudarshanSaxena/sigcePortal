var express = require("express");
var router = express.Router();
var M3 = require("../models/ComputerModels/M3");
var DIS = require("../models/ComputerModels/DIS");
var DS = require("../models/ComputerModels/DS");
var DLDA = require("../models/ComputerModels/DLDA");
var ECCF = require("../models/ComputerModels/ECCF");
var M4 = require("../models/ComputerModels/M4");
var AOA = require("../models/ComputerModels/AOA");
var OS = require("../models/ComputerModels/OS");
var CG = require("../models/ComputerModels/CG");
var MP = require("../models/ComputerModels/MP");
var DBMS = require("../models/ComputerModels/DBMS");
var CN = require("../models/ComputerModels/CN");
var TOC = require("../models/ComputerModels/TOC");
var OPT1S5 = require('../models/ComputerModels/OPT1S5');
var SE = require('../models/ComputerModels/SE');
var SPCC = require('../models/ComputerModels/SPCC');
var DWM = require('../models/ComputerModels/DWM');
var CSS = require('../models/ComputerModels/CSS');
var OPT1S6 = require('../models/ComputerModels/OPT1S6');
var DIP = require('../models/ComputerModels/DIP');
var MCC = require('../models/ComputerModels/MCC');
var AI = require('../models/ComputerModels/AI');
var OPT1S7 = require('../models/ComputerModels/OPT1S7');
var OPT2S7 = require('../models/ComputerModels/OPT2S7');
var HMI = require('../models/ComputerModels/HMI');
var PDS = require('../models/ComputerModels/PDS');
var OPT1S8 = require('../models/ComputerModels/OPT1S8');
var OPT2S8 = require('../models/ComputerModels/OPT2S8');

router.get("/", (req, res) => {
  res.render("computercourse");
});

//sem 3
router.get("/m3", (req, res) => {
  M3.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/m3", {
          posts: foundPosts
        });
      }
    });
});

router.post("/m3", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  M3.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/m3");
    }
  });
});

router.get("/ds", (req, res) => {
  DS.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/ds", {
          posts: foundPosts
        });
      }
    });
});

router.post("/ds", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  DS.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/ds");
    }
  });
});

router.get("/dlda", (req, res) => {
  DLDA.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/dlda", {
          posts: foundPosts
        });
      }
    });
});

router.post("/dlda", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  DLDA.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/dlda");
    }
  });
});

router.get("/dis", (req, res) => {
  DIS.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/dis", {
          posts: foundPosts
        });
      }
    });
});

router.post("/dis", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  DIS.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/dis");
    }
  });
});

router.get("/eccf", (req, res) => {
  ECCF.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/eccf", {
          posts: foundPosts
        });
      }
    });
});

router.post("/eccf", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  ECCF.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/eccf");
    }
  });
});

//sem 4
router.get("/m4", (req, res) => {
  M4.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/m4", {
          posts: foundPosts
        });
      }
    });
});

router.post("/m4", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  M4.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/m4");
    }
  });
});

router.get("/aoa", (req, res) => {
  AOA.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/aoa", {
          posts: foundPosts
        });
      }
    });
});

router.post("/aoa", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  AOA.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/aoa");
    }
  });
});

router.get("/coa", (req, res) => {
  COA.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/coa", {
          posts: foundPosts
        });
      }
    });
});

router.post("/coa", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  COA.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/coa");
    }
  });
});

router.get("/os", (req, res) => {
  OS.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/os", {
          posts: foundPosts
        });
      }
    });
});

router.post("/os", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  OS.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/os");
    }
  });
});

router.get("/cg", (req, res) => {
  CG.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/cg", {
          posts: foundPosts
        });
      }
    });
});

router.post("/cg", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  CG.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/cg");
    }
  });
});

//sem 5

router.get("/mp", (req, res) => {
  MP.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/mp", {
          posts: foundPosts
        });
      }
    });
});

router.post("/mp", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  MP.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/mp");
    }
  });
});

router.get("/dbms", (req, res) => {
  DBMS.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/dbms", {
          posts: foundPosts
        });
      }
    });
});

router.post("/dbms", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  DBMS.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/dbms");
    }
  });
});

router.get("/cn", (req, res) => {
  CN.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/dbms", {
          posts: foundPosts
        });
      }
    });
});

router.post("/cn", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  CN.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/dbms");
    }
  });
});

router.get("/toc", (req, res) => {
  TOC.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/toc", {
          posts: foundPosts
        });
      }
    });
});

router.post("/toc", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  TOC.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/toc");
    }
  });
});

router.get('/opt1s5',(req,res)=>{
  OPT1S5.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/opt1s5", {
          posts: foundPosts
        });
      }
    });
});

router.post("/opt1s5", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  OPT1S5.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/opt1s5");
    }
  });
});

router.get('/se',(req,res)=>{
  SE.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/se", {
          posts: foundPosts
        });
      }
    });
});

router.post("/se", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  SE.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/se");
    }
  });
});

router.get('/spcc',(req,res)=>{
  SPCC.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/spcc", {
          posts: foundPosts
        });
      }
    });
});

router.post("/spcc", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  SPCC.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/spcc");
    }
  });
});

router.get('/dwm',(req,res)=>{
  DWM.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/dwm", {
          posts: foundPosts
        });
      }
    });
});

router.post("/dwm", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  DWM.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/dwm");
    }
  });
});

router.get('/css',(req,res)=>{
  CSS.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/css", {
          posts: foundPosts
        });
      }
    });
});

router.post("/css", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  CSS.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/css");
    }
  });
});

router.get('/opt1s6',(req,res)=>{
  OPT1S6.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/opt1s6", {
          posts: foundPosts
        });
      }
    });
});

router.post("/opt1s6", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  OPT1S6.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/opt1s6");
    }
  });
});

router.get('/dip',(req,res)=>{
  DIP.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/dip", {
          posts: foundPosts
        });
      }
    });
});

router.post("/dip", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  DIP.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/dip");
    }
  });
});

router.get('/mcc',(req,res)=>{
  MCC.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/mcc", {
          posts: foundPosts
        });
      }
    });
});

router.post("/mcc", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  MCC.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/mcc");
    }
  });
});

router.get('/ai',(req,res)=>{
  AI.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/ai", {
          posts: foundPosts
        });
      }
    });
});

router.post("/ai", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  AI.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/ai");
    }
  });
});

router.get('/opt1s7',(req,res)=>{
  OPT1S7.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/opt1s7", {
          posts: foundPosts
        });
      }
    });
});

router.post("/opt1s7", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  OPT1S7.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/opt1s7");
    }
  });
});

router.get('/opt2s7',(req,res)=>{
  OPT2S7.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/opt2s7", {
          posts: foundPosts
        });
      }
    });
});

router.post("/opt2s7", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  OPT2S7.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/opt2s7");
    }
  });
});

router.get('/hmi',(req,res)=>{
  HMI.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/hmi", {
          posts: foundPosts
        });
      }
    });
});

router.post("/hmi", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  HMI.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/hmi");
    }
  });
});

router.get('/pds',(req,res)=>{
  PDS.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/pds", {
          posts: foundPosts
        });
      }
    });
});

router.post("/pds", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  PDS.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/pds");
    }
  });
});

router.get('/opt1s8',(req,res)=>{
  OPT1S8.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/opt1s8", {
          posts: foundPosts
        });
      }
    });
});

router.post("/opt1s8", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  OPT1S8.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/opt1s8");
    }
  });
});

router.get('/opt2s8',(req,res)=>{
  OPT2S8.find({})
    .sort("-date")
    .exec(function(err, foundPosts) {
      if (err) {
        res.send(err);
      } else {
        res.render("computer/opt2s8", {
          posts: foundPosts
        });
      }
    });
});

router.post("/opt2s8", (req, res) => {
  var title = req.body.postTitle;
  var body = req.body.postBody;
  var author = {
    id: req.user._id,
    username: req.user.username,
    usersName: req.user.usersName
  };
  var newPost = {
    title: title,
    body: body,
    author: author
  };
  OPT2S8.create(newPost, (err, createdPost) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/computercourses/opt2s8");
    }
  });
});

module.exports = router;