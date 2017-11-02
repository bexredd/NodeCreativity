var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile('/index.html',{root:'public'}); 
 //res.render('index', { title: 'Express' });
});

router.get("/nasaImage", function(req,res,next){
	console.log("in Nasa function");
	request("https://images-api.nasa.gov/search?q="+req.query.q).pipe(res);
});

module.exports = router;
