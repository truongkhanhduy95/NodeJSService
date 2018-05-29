var express = require('express');
var Status = require('../controllers/statusController');

var apiRoutes = express.Router();
  
apiRoutes.route('/status').get(Status.list);
apiRoutes.route('/status').post(Status.post);

module.exports = apiRoutes;
