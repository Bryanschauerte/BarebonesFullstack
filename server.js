var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  port = 8888;

  app.use(express.static(__dirname + '/public'));
  app.use(bodyParser.json());
  app.use(cors());

var mongoPort = process.env.MONGO_PORT || 27017;
var mongoURI  = 'mongodb://localhost:' + mongoPort + '/barebones';



var MessageSchema = new mongoose.Schema({
  message:{type: String, required: true},
  name: {type : String, required: true}
});

var Message = mongoose.model('Message', MessageSchema);
var serverPort = process.env.EXPRESS_PORT || 8181;

mongoose.connect(mongoURI);
mongoose.connection.once('open', function(){
  console.log('mdb listening on:', mongoPort);
});

app.post('/api/messages', function(req, res){
  Message.create(req.body, function(err, result){

    if(err){
      res.send(err);
    }
    else{
      res.send(result);
    }
  })
})

app.get('/api/messages', function(req, res){
  Message.find({}, function(err, result){
    if(err){
      res.send(err);
    } else {
      res.send(result)
    }


  })
})

app.listen(port, function(){
    console.log('listening on port ' + port);
  });
