var express = require('express');
var router = express.Router();
var ZoneController = require('../controllers/ZoneController');
var controllers = require('../controllers');

router.get('/:resource', function(req, res, next) {

	var resource = req.params.resource;
	var controller = controllers[resource];

	if(controller == null) {
		res.json({
			confirmation: 'fail',
			message: 'Invalid Resource Request: '+ resource
		});

		return
	};

	controller.find(req.query, function(err, results){
		if(err) {
			res.json({
				confirmation: 'Fail',
				message: err
			});

			return
		}

		res.json({
			confirmation: 'success',
			results: results,
		});
	})
});

router.get('/:resource/:id', function(req, res, next) {
	var resource = req.params.resource;
	var id = req.params.id;
	var controller = controllers[resource];

	controller.findById(id, function(err, result) {
		if(err) {
			res.json({
				confirmation: 'Fail',
				message: "Not found"
			});

			return
		}

		res.json({
			confirmation: 'sucess',
			result: result
		});
	});
});

router.post('/:resource', function(req, res, next) {
	var resource = req.params.resource;
	// console.log('resource', resource)
	var controller = controllers[resource];	

	controller.create(req.body, function(err, result) {
		if(err) {
			res.json({
				confirmation: 'fail',
				message: err
			})

			return
		}

		res.json({
			confirmation: 'success',
			result: result
		});
	});
});

module.exports = router;