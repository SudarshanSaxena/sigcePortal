var mongoose = require('mongoose');

const OPT1S5Schema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body: {
        type: String,
        required:true,
    },
    date:{
        type: Date,
        default: Date.now
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
        usersName: String
    }
});

const OPT1S5 = mongoose.model('OPT1S5', OPT1S5Schema);
module.exports = OPT1S5;