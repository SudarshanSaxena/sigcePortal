var mongoose = require('mongoose');

const AOASchema = new mongoose.Schema({
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

const AOA = mongoose.model('AOA', AOASchema);
module.exports = AOA;