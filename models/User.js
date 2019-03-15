var mongoose = require('mongoose');
var bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    usersRole: {
        type: String,
        required: true
    },
    usersName: {
        type: String,
        required: true
    },
    usersPhoneNumber: {
        type: String,
        required: true,
    },
    usersEmail: {
        type: String,
        required: true
    },
    usersDepartment:{
        type: String,
        required:true
    },
    usersBatch:{
        type:String,
        required:true
    },

});

UserSchema.methods.hashPassword = function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
}

UserSchema.methods.comparePassword = function(password,hash){
    return bcrypt.compareSync(password,hash);
}

const User = mongoose.model('User', UserSchema, 'users');
module.exports = User;