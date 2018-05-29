var express = require('express');
var User = require('../models/user')
var apiRoutes = express.Router();

apiRoutes.get('/', function(req, res) {
    res.json({ message: 'Welcome to the Zalo APIs!' });
  });
  
  apiRoutes.get('/users', function(req, res) {
    User.find({}, function(err, user) {
      res.json(user);
    });
  });   

  module.exports = apiRoutes;
