var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var list = require('./propList.js');
var calculateDistance = require('./haversine.js');

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(cors());

app.post('/api', function(req, res){
  console.log('got a request to api', req)

  var coords = req.body;
  var results = [];

  // var testCoords = {
  //   lat: 37.788840,
  //   long: 122.398129
  // };
  

  list.data.forEach(function(properties){
    var distance = calculateDistance(coords, properties);
    if (distance <= 20){
      properties.distance = distance;
      results.push(properties);
    }
  })

  results.sort(function(a,b){return a.distance - b.distance});

  res.send(results);

});

app.listen(3000);
console.log('Listening on port 3000');