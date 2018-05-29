var express = require('express');
var app = express();
var config = require('./config');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/user')

mongoose.connect(config.database);
var db = mongoose.connection;
//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('connect success')
});
app.set('superSecret', config.secret); // secret variable

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send("Hello world!");
});

var apiRoutes = require('./controllers/router');
app.use('/api', apiRoutes);

app.listen(3000);