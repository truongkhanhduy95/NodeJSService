var Contact = require('../models/contact');

exports.list = (req, res) => {
    Contact.find({}, function(err, contacts) {
        if(err)
            res.json({ success: false, message: err});
        else
            res.json({ success: true, message: "Success!", data: contacts });
    });
}