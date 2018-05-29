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
    const data = Object.assign({}, req.body, {}) || {};    
    Status.create(data, function(err, statuses) {
        if(err){
                 res.status(500).send(err.errors);
           console.log(err.errors);
        }
            res.json(statuses); //json form success, 200?
    });

}

exports.listByUserId = (req, res) => {
    var id = req.params.userId;
    console.log(id)
    Status.find({
        "owner.user_id": id
    }, function(err, statuses) {
        if(err)
            res.status(404).send(err.errors);
        else
            res.json(statuses);
    });
}