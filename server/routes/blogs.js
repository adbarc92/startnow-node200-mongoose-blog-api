const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const User = require('../models/User');

router.get('/', (req, res) => {
	Blog
		.find()
		.then(blogs => {
			res.status(200).json(blogs);
		});
});

router.get('/featured', (req, res) => {
	Blog
		.where('featured', true)
		.then(blogs => {
			res.status(200).json(blogs);
		});
});

router.get('/:_id', (req, res) => {
	Blog
		.findById(req.params)
		.then(blogs => {
			if (blogs === null) res.status(404).end();
			else res.status(200).json(blogs);
		});
});

router.post('/', (req, res) => {
    const newBlog = new Blog(req.body)
        newBlog.save() 
        .then(newBlog => {
            res.status(201).json(newBlog);
        });
});

router.put('/:_id', (req, res) => {
	Blog
		.findByIdAndUpdate(req.params._id, req.body)
		.then(blogs => {
			if (blogs === null) res.status(404).end();
			else res.status(204).json(blogs);
		});
});

router.delete('/:_id', (req, res) => {
	User.findById(req.body.authorId)
		.then(user => {
			user.blogs.splice(blogs.indexOf(req.params), 1)
		})
		.then(Blog
			.findByIdAndRemove(req.params)
			.then(blogs => {
				if (blogs === null) res.status(404).end()
				else res.status(200).json(blogs);
			})
		);
});

module.exports = router;