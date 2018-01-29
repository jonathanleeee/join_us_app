var express    = require('express');
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'jonathansodamnho',
  database : 'join_us'
});


app.get('/', function(req, res) {
   var q = 'SELECT COUNT(*) AS count FROM users';
   connection.query(q, function (error, results) {
      if (error) throw error;
      var count = results[0].count;
         res.render('home', {data: count});
    });
});

app.post('/register', function(req, res) {
    // below code just show that incoming data will show in req.body after installing body-parser
//   console.log('post request sent to /register ' + req.body.email); 
   var person = {
       email:req.body.email
   };
   connection.query('INSERT INTO users SET ?', person, function(error, result) {
       if (error) throw error;
       console.log(result);
       res.redirect('/');
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

