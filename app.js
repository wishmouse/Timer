var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-hbs');
var app = express();
var Promise = this.Promise || require('promise');
var fs = require('fs');
var cheerio = require('cheerio');
var server = require('http').createServer(app); // create the server
var router = require('express').Router();

var readFile = Promise.denodeify(fs.readFile);
var writeFile = Promise.denodeify(fs.writeFile);
var port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: false }));

app.get('/', function(req, res){
  res.render('index')
})

app.listen(3000, function(){
  console.log("well its not dead.... 3000")
})

module.exports = app;
