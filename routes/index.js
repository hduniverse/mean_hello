var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Didi Website' });
});

module.exports = router;

var mongodb = require('mongodb');

router.get('/', function(req,res,next) {
	res.render('index', { title: 'Didi website' });
});

router.get('/thelist', function(req,res){
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/didi_website';

	MongoClient.connect(url, function (err, db) {
		if (err) {
			console.log(' Unable to connect to the Server', err);
		} else {
			console.log('Connection established to', url);

			var collection = db.collection('students');

			collection.find({}).toArray(function (err, result) {
				if (err) {
					res.send(err);
				} else if (result.length) {
					res.render('studentlist',{
						"studentlist" : result
					});
				} else {
					res.send('No documents found');
				}
				db.close();
			});
		}
	});
});