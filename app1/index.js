var express = require('express');
var app = express();

app.use('/', function(req, res, next){
  console.log('app use /');
  next();
});

app.get('/', function(req, res, next){
  console.log('app get /');
  next();
});

app.get('/aaa', function(req, res, next){
  console.log('app get /aaa');
  next
});

module.exports = app;

