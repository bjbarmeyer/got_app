var express = require('express');
var router = express.Router();

var db = require('../client/database.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	db.initializeTables();
  	res.redirect('/home/');
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  //var username = req.session.user.username;
  //var isOwner = req.session.user.type.trim() == "owner";
  res.render('home', {title: 'GOT App', /*isOwner:isOwner, username:username*/});
});

/* GET house_matcher page. */
router.get('/house_matcher', function(req, res, next) {
    //var username = req.session.user.name;
    //var isOwner = req.session.user.role.trim() == "owner";
    res.render('house_matcher', {title:'GOT House Matcher'});
});

module.exports = router;
