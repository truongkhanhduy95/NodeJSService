var Contact = require('../models/contact');

exports.list = (req, res) => {
    Contact.find({}, function(err, contacts) {
        if(err)
            res.status(422).send(err.errors);
        else
            res.json(contacts);
    });
}