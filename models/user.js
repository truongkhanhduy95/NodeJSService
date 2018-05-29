var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true
      },
    password: {
    type: String,
    required: true,
    },
    fullname: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    phonenumber: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true
    },
    avatar: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
});


var User = mongoose.model('user', UserSchema);
module.exports = User;