var mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
    owner:{
        user_avatar:{
            type: String,
            required: true
        },
        user_name:{
            type: String,
            required: true
        },
        user_id:{
            type: String,
            required: true
        }
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


var Status = mongoose.model('statuses', StatusSchema);
module.exports = Status;