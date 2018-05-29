var mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
    owners:{
        user_avatar:{
            type: String,
            required: true,
            trim: true
        },
        user_name:{
            type: String,
            required: true,
            trim: true
        },
        user_id:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    time_create: {
        type: String
      },
    content: {
        type: String,
        trim: true
    },
    image: {
        type: String
    },
    likes: {
        type: Number,
        required: true
    },
    comments: {
        type: Number,
        required: true
    }
});


var Status = mongoose.model('status', StatusSchema);
module.exports = Status;