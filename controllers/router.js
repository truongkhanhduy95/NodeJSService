var express = require('express');
var Status = require('../controllers/statusController');
var Contact = require('../controllers/contactController')

var apiRoutes = express.Router();
  
apiRoutes.route('/status').get(Status.list);
apiRoutes.route('/status').post(Status.post);

apiRoutes.route('/contact').get(Contact.list);
module.exports = apiRoutes;
