var User = require('../models/user');

exports.userInfo = (req, res) => {
    var id = req.query.userid;
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

exports.authenticate = (req,res) => {
    User.findOne({
        username: req.body.username
      }, function(err, user) {
    
        if (err) throw err;
    
        if (!user) {
          res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
    
          // check if password matches
          if (user.password != req.body.password) {
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          } else {

            res.json({
              success: true,
              message: 'login success'
            });
          }
        }
    });
}