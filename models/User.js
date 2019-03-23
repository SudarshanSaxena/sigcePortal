var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
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
    usersDepartment: {
        type: String,
        required: true
    },
    usersBatch: {
        type: String,
        required: true
    },

});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema, 'users');
module.exports = User;