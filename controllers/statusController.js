var Status = require('../models/status');

exports.list = (req, res) => {
    Status.find({}, function(err, statuses) {
        if(err)
            res.status(422).send(err.errors);
        else
            res.json(statuses);
    });
} 

exports.post = (req, res) => {
    const data = Object.assign({}, req.body, {
        //iMplement
    }) || {};

    Status.find(data, function(err, statuses) {
        if(err)
            res.status(500).send(err.errors);
        else
            res.json(statuses); //json form success, 200?
    });

}