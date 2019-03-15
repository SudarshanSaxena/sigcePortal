var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
var expressValidator = require('express-validator');
var LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var coursesRouter = require('./routes/courses');
var chatRouter = require('./routes/chat');
var createpostRouter = require('./routes/createpost');
var computerCoursesRouter = require('./routes/coumputercourses');
var electronicsCoursesRouter = require('./routes/electronicscourses');
var electricalCoursesRouter = require('./routes/electricalcourses');
var mechanicalCourseRouter = require('./routes/mechanicalcourses');
var logoutRouter = require('./routes/logout');
var  auth = require('./routes/auth')(passport);

require('./passport')(passport);

var app = express();


//database setup
mongoose.connect('mongodb+srv://sudarshan_personal:Sudarshan@97@cluster0-n66st.mongodb.net/test?retryWrites=true',{urlencoded:true,useNewUrlParser: true});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', exphbs({defaultLayout:'layout'}))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'secret text, should not get out',
  saveUninitialized:true,
  resave:true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/chat', chatRouter);
app.use('/createpost', createpostRouter);
app.use('/computercourses', computerCoursesRouter);
app.use('/electronicscourses', electronicsCoursesRouter);
app.use('/electricalcourses',electricalCoursesRouter);
app.use('/mechanicalcourses', mechanicalCourseRouter);
app.use('/logout', logoutRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.listen(5001,'localhost', () => {
  console.log('server started at 5001');
})

module.exports = app;
