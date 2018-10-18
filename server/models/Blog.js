const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Tells Mongoose how listed properties should be mapped with a MongoDB document
const BlogSchema = new Schema({
	author: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	title: {
		type: String,
		required: true
	},
	article: {
		type: String,
		required: true
	},
	published: {
		type: Date,
		required: true
	},
	featured: {
		type: Boolean,
		required: true
	}
});

module.exports = mongoose.model('Blog', BlogSchema);