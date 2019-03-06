var mongoose = require('mongoose');

const M3Schema = new mongoose.Schema({
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
    }
});

const M3 = mongoose.model('M3', M3Schema);
module.exports = M3;