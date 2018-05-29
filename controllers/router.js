var express = require('express');
var Status = require('../controllers/statusController');
var Users = require('../controllers/UserController');

var apiRoutes = express.Router();
  
apiRoutes.route('/status').get(Status.list);
apiRoutes.route('/status').post(Status.post);
apiRoutes.route('/userinfo').get(Users.userInfo);
apiRoutes.route('/listuser').get(Users.listUser);

module.exports = apiRoutes;
