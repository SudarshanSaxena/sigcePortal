var mongoose = require('mongoose');

const OPT2S7Schema = new mongoose.Schema({
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

const OPT2S7 = mongoose.model('OPT2S7', OPT2S7Schema);
module.exports = OPT2S7;