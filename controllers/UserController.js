var User = require('../models/user');

exports.userInfo = (req, res) => {
    var id = req.params.userId;
    console.log(id);
    User.findById(id, function (err, user) {
        if (err)
            res.status(404).send(err.errors);
        else
            res.json(user);
    });
}

exports.listUser = (req, res) => {
    User.find({}, function (err, listUser) {
        if (err)
            res.status(422).send(err.errors);
        else
            res.json(listUser);
    });
} 
