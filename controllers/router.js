var express = require('express');
var Status = require('../controllers/statusController');

var User = require('../controllers/UserController');
var Contact = require('../controllers/contactController')

var apiRoutes = express.Router();
  
apiRoutes.route('/login').post(User.authenticate);

apiRoutes.route('/statuses').get(Status.list);
apiRoutes.route('/statuses').post(Status.post);
apiRoutes.route('/statuses/:userId').get(Status.listByUserId);

apiRoutes.route('/users').get(User.listUser);
apiRoutes.route('/users/:userId').get(User.userInfo);

apiRoutes.route('/contacts').get(Contact.list);
module.exports = apiRoutes;
