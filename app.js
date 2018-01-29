var express = require("express");
var app = express();

app.get('/', function(req, res) {
   res.send('Hello world!');
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