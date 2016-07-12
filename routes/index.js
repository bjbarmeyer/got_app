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
  var wm_cur = false;
  var hm_cur = false;
  var h_cur = false;
  res.render('home', {title: 'GOT App', wm_cur:wm_cur, hm_cur:hm_cur, h_cur:h_cur/*isOwner:isOwner, username:username*/});
});

/* GET world map page. */
router.get('/world_map', function(req, res, next) {
	var wm_cur = true;
	var hm_cur = false;
	var h_cur = false;
    res.render('world_map', {title:'Game of Thrones World Map', wm_cur:wm_cur, hm_cur:hm_cur, h_cur:h_cur});
});

/* GET house_matcher page. */
router.get('/house_matcher', function(req, res, next) {
    //var username = req.session.user.name;
    //var isOwner = req.session.user.role.trim() == "owner";
    var wm_cur = false;
    var hm_cur = true;
    var h_cur = false;
    res.render('house_matcher', {title:'GOT House Matcher', wm_cur:wm_cur, hm_cur:hm_cur, h_cur:h_cur});
});

/* GET house arryn page. */
router.get('/arryn', function(req, res, next) {
	var wm_cur = false;
    var hm_cur = false;
    var h_cur = true;
    res.render('arryn', {title:'House Arryn', wm_cur:wm_cur, hm_cur:hm_cur, h_cur:h_cur});
});

/* GET house arryn page. */
router.get('/baratheon', function(req, res, next) {
	var wm_cur = false;
    var hm_cur = false;
    var h_cur = true;
    res.render('baratheon', {title:'House Baratheon', wm_cur:wm_cur, hm_cur:hm_cur, h_cur:h_cur});
});

/* GET house arryn page. */
router.get('/greyjoy', function(req, res, next) {
	var wm_cur = false;
    var hm_cur = false;
    var h_cur = true;
    res.render('greyjoy', {title:'House Greyjoy', wm_cur:wm_cur, hm_cur:hm_cur, h_cur:h_cur});
});

/* GET house arryn page. */
router.get('/lannister', function(req, res, next) {
	var wm_cur = false;
    var hm_cur = false;
    var h_cur = true;
    res.render('lannister', {title:'House Lannister', wm_cur:wm_cur, hm_cur:hm_cur, h_cur:h_cur});
});

/* GET house arryn page. */
router.get('/martell', function(req, res, next) {
	var wm_cur = false;
    var hm_cur = false;
    var h_cur = true;
    res.render('martell', {title:'House Martell', wm_cur:wm_cur, hm_cur:hm_cur, h_cur:h_cur});
});

/* GET house arryn page. */
router.get('/stark', function(req, res, next) {
	var wm_cur = false;
    var hm_cur = false;
    var h_cur = true;
    res.render('stark', {title:'House Stark', wm_cur:wm_cur, hm_cur:hm_cur, h_cur:h_cur});
});

/* GET house arryn page. */
router.get('/targaryen', function(req, res, next) {
	var wm_cur = false;
    var hm_cur = false;
    var h_cur = true;
    res.render('targaryen', {title:'House Targaryen', wm_cur:wm_cur, hm_cur:hm_cur, h_cur:h_cur});
});

/* GET house arryn page. */
router.get('/tully', function(req, res, next) {
	var wm_cur = false;
    var hm_cur = false;
    var h_cur = true;
    res.render('tully', {title:'House Tully', wm_cur:wm_cur, hm_cur:hm_cur, h_cur:h_cur});
});

/* GET house arryn page. */
router.get('/tyrell', function(req, res, next) {
	var wm_cur = false;
    var hm_cur = false;
    var h_cur = true;
    res.render('tyrell', {title:'House Tyrell', wm_cur:wm_cur, hm_cur:hm_cur, h_cur:h_cur});
});

module.exports = router;
