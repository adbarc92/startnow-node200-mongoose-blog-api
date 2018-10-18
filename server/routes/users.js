const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', (req, res) => {
	User
		.find()
		.then(users => {
			if (users === null) res.status(404).end();
			else { res.status(200).json(users); }
		});
});

router.get('/:_id', (req, res) => {
	User
		.findById(req.params)
		.then(users => {
			if (users === null) res.status(404).end();
			else { res.status(200).json(users); }
		});
});

router.post('/', (req, res) => {
	const newUser = new User(req.body);
	newUser
		.save()
		.then(users => {
			res.status(201).json(users);
		});
});

router.put('/:_id', (req, res) => {
	User
		.findByIdAndUpdate(req.params.id)
		.then(users => {
			if (users === null) res.status(404).end();
			else { res.status(204).json(users); }
		});
})

router.delete('/:_id', (req, res) => {
	User
		.findByIdAndRemove(req.params.id)
		.then(users => {
			if (users === null) res.status(404).end();
			else { res.status(200).json(users); }
		});
})

module.exports = router;