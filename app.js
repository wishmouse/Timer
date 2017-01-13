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
var mongodb = require('mongodb')

var readFile = Promise.denodeify(fs.readFile);
var writeFile = Promise.denodeify(fs.writeFile);
var port = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: false }));

app.get('/', function(req, res){
  var MongoClient = mongodb.MongoClient
  var url = "mongodb://localhost:27017/Timer"

  MongoClient.connect(url, function(err, db){
    if (err){
      console.log("ooops there's an error", err)
    } else {
      var collection = db.collection("Timer")
      collection.find({}).toArray(function(err, result){
        if (err){
          conosole.log("this is error", err)
          res.send(err)
        } else if (result.length){
          res.render("index", result)
          console.log('this is result', result)
        }
        else{
          console.log("no dcoument found")
          res.send("No documents found")
        }
        db.close()
      })
    }
  })
})

app.post('/', function(req, res){
  var city = result
  request
    .get('result')
    .set('Accept', 'application/json')
    .then(function(data){
    res.render('main',data)
  })
})

/*
app.get("/newTimer", function(req, res){
  res.render('newTimer', {title:"add new Times"})
})
*/
app.listen(3000, function(){
  console.log("cruising along on 3000")
})

module.exports = app;
