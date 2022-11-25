var express = require('express');
var router = express.Router();
let userModel=('.../model/user')
let User = userModel.User;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
  { 
    title: '' 
  });
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', 
  { 
    title: '' 
  });
});


module.exports = router;
