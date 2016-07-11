var express = require('express');
var router = express.Router();

var db = require('../client/database.js');

/* GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

/* GET api home */
router.get('/', function(req, res, next) {
  res.json({"hello":"world"});
});

module.exports = router;
