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

/* GET house arryn page. */
router.get('/arryn', function(req, res, next) {
    res.render('arryn', {title:'House Arryn'});
});

/* GET house arryn page. */
router.get('/baratheon', function(req, res, next) {
    res.render('baratheon', {title:'House Baratheon'});
});

/* GET house arryn page. */
router.get('/greyjoy', function(req, res, next) {
    res.render('greyjoy', {title:'House Greyjoy'});
});

/* GET house arryn page. */
router.get('/lannister', function(req, res, next) {
    res.render('lannister', {title:'House Lannister'});
});

/* GET house arryn page. */
router.get('/martell', function(req, res, next) {
    res.render('martell', {title:'House Martell'});
});

/* GET house arryn page. */
router.get('/stark', function(req, res, next) {
    res.render('stark', {title:'House Stark'});
});

/* GET house arryn page. */
router.get('/targaryen', function(req, res, next) {
    res.render('targaryen', {title:'House Targaryen'});
});

/* GET house arryn page. */
router.get('/tully', function(req, res, next) {
    res.render('tully', {title:'House Tully'});
});

/* GET house arryn page. */
router.get('/tyrell', function(req, res, next) {
    res.render('tyrell', {title:'House tyrell'});
});

module.exports = router;
