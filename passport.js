var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/User');

module.exports = function(passport){
    passport.serializeUser(function(user,done){
        done(null,user);
    });
    passport.deserializeUser(function(user,done){
        done(null,user);
    });

    passport.use(new LocalStrategy(function(username,password,done){
        User.findOne({username:username},function(err,foundUser){
            if(err){done(err)}
            else{
                if(foundUser){
                    var valid = foundUser.comparePassword(password,foundUser.password);
                    if(valid){
                        done(null,{
                            username: foundUser.username,
                            password: foundUser.password
                        });
                    }else{
                        done(null,false);
                    }
                }else{
                    done(null,false);
                }
            }
        })
    }))
}