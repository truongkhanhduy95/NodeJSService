var express = require('express');
var Status = require('../controllers/statusController');
var User = require('../controllers/UserController');

var apiRoutes = express.Router();
  
apiRoutes.route('/status').get(Status.list);
apiRoutes.route('/status').post(Status.post);
apiRoutes.route('/users').get(User.listUser);
apiRoutes.route('/users/:userId').get(User.userInfo);

module.exports = apiRoutes;
