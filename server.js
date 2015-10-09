var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  port = 8888;

  app.use(express.static(__dirname + '/public'));
  app.use(bodyParser.json());


var mongoPort = process.env.MONGO_PORT || 27017;
var mongoURI  = 'mongodb://localhost:' + mongoPort + '/barebones';

  app.listen(port, function(){
    console.log('listening on port ' + port);
  });



var messageSchema =

var serverPort = process.env.EXPRESS_PORT || 8181;

mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
  console.log('mdb listening on:', mongoPort);
});
