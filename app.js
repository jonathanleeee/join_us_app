var express    = require("express");
var mysql      = require('mysql');
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'jonathansodamnho',
  database : 'join_us'
});

app.get('/', function(req, res) {
   var q = 'SELECT COUNT(*) AS count FROM users';
   connection.query(q, function (error, results) {
      if (error) throw error;
      var msg = 'We have ' + results[0].count + ' users';
      res.send(msg);
    });
});

app.get('/joke', function(req, res) {
    var joke = 'this is a black joke';
    res.send(joke);
});

app.get('/random_num', function(req, res) {
   var num = Math.floor(Math.random() * 10) + 1;
   res.send('The number is going to be ' + num);
});

app.listen(8080, function(){
    console.log('connection established');
});

