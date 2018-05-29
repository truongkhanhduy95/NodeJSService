var Status = require('../models/status');

exports.list = (req, res) => {
    Status.find({}, function(err, statuses) {
        if(err)
            res.json({ success: false, message: err});
        else
            res.json({ success: true, message: "Success!", data: statuses });
            
    });
} 

exports.post = (req, res) => {
    const data = Object.assign({}, req.body, {}) || {};    
    Status.create(data, function(err, status) {
        if(err)
            res.json({ success: false, message: err});
        else
            res.json({ success: true, message: "Status posted!", data: status });
    });

}

exports.listByUserId = (req, res) => {
    var id = req.params.userId;
    console.log(id)
    Status.find({
        "owner.user_id": id
    }, function(err, statuses) {
        if(err)
            res.json({ success: false, message: err});
        else
            res.json({ success: true, message: "Success!", data: statuses });
    });
}