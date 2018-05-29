var mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    avatar: {
        type: String
    },
    contact_name: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String
    }
});

var Contact = mongoose.model('contacts', ContactSchema);
module.exports = Contact;