var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true
    },
    phonenumber: {
        type: String,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    dob: {
        type: Date,
    },
    avatar: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
});


var User = mongoose.model('user', UserSchema);
module.exports = User;