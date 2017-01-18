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
/*
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: false }));
*/
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//gets info from the database
app.get('/', function(req, res){
  res.render("main")
})

app.get('/api',  function(req, res){
  var MongoClient = mongodb.MongoClient
  var url = "mongodb://localhost:27017/Timer"

  MongoClient.connect(url, function(err, db){
    if (err){
      console.log("ooops there's an error: ", err)
    } else {
      var collection = db.collection("Timer")
      collection.find({}).toArray(function(err, result){
        if (err){
          conosole.log("there is an error: ", err)
          res.send(err)
        } else if (result.length){
          console.log("result", result)
          res.send(JSON.stringify(result))
          //res.json(result)
          //console.log('this is result', result)
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
//app.post posts information to database
app.post('/', function(req, res){

  ectTimeValue =  req.body //returns object
  var MongoClient = mongodb.MongoClient
  var url = "mongodb://localhost:27017/Timer"

  MongoClient.connect(url, function(err, db){
    if (err){
      console.log("ooops there's an error: ", err)
    } else {
      var collection = db.collection("Timer")
      var newTime = {ectTimeValue}
      collection.insert([newTime], function(err, result){
        console.log(" date off the first object", result)
        if (err){
          conosole.log("there is an error: ", err)
        } else {
          res.redirect('main')
        }
        db.close()
      })
    }
  })
})

app.listen(3000, function(){
  console.log("cruising along on 3000")
})

module.exports = {
  app:app,
  router:router
}
