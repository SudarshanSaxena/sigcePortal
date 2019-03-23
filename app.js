// requiring dependencies
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');

//requiring routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coursesRouter = require('./routes/courses');
var chatRouter = require('./routes/chat');
var createpostRouter = require('./routes/createpost');
var computerCoursesRouter = require('./routes/coumputercourses');
var electronicsCoursesRouter = require('./routes/electronicscourses');
var electricalCoursesRouter = require('./routes/electricalcourses');
var mechanicalCourseRouter = require('./routes/mechanicalcourses');

//requiring models
var User = require('./models/User');

var app = express();


//database setup
mongoose.connect('mongodb+srv://sudarshan_personal:Sudarshan@97@cluster0-n66st.mongodb.net/test?retryWrites=true', {
  urlencoded: true,
  useNewUrlParser: true
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//set up session
app.use(require('express-session')({
  secret: 'Sudarshan is the best coder',
  saveUninitialized: false,
  resave: false
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(passport.initialize());
app.use(passport.session())

app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  next();
})

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(__dirname + '/public', { redirect : false }));

app.use('/', ,indexRouter);
//app.use('/users', usersRouter);
app.use('/courses',isLoggedIn ,coursesRouter);
app.use('/chat',isLoggedIn , chatRouter);
app.use('/createpost',isLoggedIn ,createpostRouter);
app.use('/computercourses',isLoggedIn ,computerCoursesRouter);
app.use('/electronicscourses',isLoggedIn, electronicsCoursesRouter);
app.use('/electricalcourses',isLoggedIn, electricalCoursesRouter);
app.use('/mechanicalcourses',isLoggedIn, mechanicalCourseRouter);


//register route
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var usersName = req.body.usersName;
  var usersRole = req.body.usersRole;
  var usersPhone = req.body.usersPhone;
  var usersEmail = req.body.usersEmail;
  var usersDepartment = req.body.usersDepartment;
  var usersBatch = req.body.usersBatch;
  var confirmPassword = req.body.confirmPassword;

  if(password != confirmPassword){
    res.send('Check password and try again please.');
  }

  User.register(new User({
    username: username,
    password: password,
    confirmPassword: confirmPassword,
    usersBatch: usersBatch,
    usersDepartment: usersDepartment,
    usersName: usersName,
    usersPhoneNumber: usersPhone,
    usersRole: usersRole,
    usersEmail: usersEmail
  }), password, (err, savedUser) => {
    if(err){
      res.send(err);
    }
    else{
      passport.authenticate('local')(req,res,function(){
        res.redirect('/');
      })
    }
  })
})


//login routes
app.get('/login',(req,res)=>{
  res.render('login');
});

app.post('/login',passport.authenticate('local', {
  successRedirect:'/',
  failureRedirect: '/login'
}), (req,res)=>{

})

//logout route
app.get('/logout', (req,res)=>{
  req.logout();
  res.redirect('/login');
})

//middleware
function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }else{
    res.redirect('/login');
  }
 
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


app.listen(5001, 'localhost', () => {
  console.log('server started at 5001');
})

module.exports = app;