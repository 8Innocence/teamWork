var express = require('express');
var router = express.Router();
const carsData =require("../data/index");
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.jsonp(carsData);
});

module.exports = router;
