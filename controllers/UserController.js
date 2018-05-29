var User = require('../models/user');
const PasswordEncoder = require('../helpers/passwordEncoder');

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

exports.registerUser = (req, res) => {
    var user = new User();
    console.log(req.body.username);
    user.username = req.body.username;
    user.password = req.body.password;
    user.fullname = req.body.fullname;
    user.phonenumber = req.body.phonenumber;
    user.email = req.body.email;
    user.dob = req.body.dob;
    user.avatar = req.body.avatar;
    user.gender = req.body.gender;
    user.save(function(err) {
        if (err) {
            console.log(err)
            res.status(404).send(err.errors);
        }
        else {
            console.log("success")
            res.json(user);
        }
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
          if (PasswordEncoder.comparePassword(req.body.password, user.password)) {
            res.json({
                success: true,
                message: 'login success'
              });
          } else {
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
          }
        }
    });
}