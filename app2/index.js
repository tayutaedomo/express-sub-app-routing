var express = require('express');
var app = express();

app.use('/', function(req, res, next){
  console.log('app2 use /');
  next();
});

app.get('/', function(req, res, next){
  console.log('app2 get /');
  next();
});

module.exports = app;

