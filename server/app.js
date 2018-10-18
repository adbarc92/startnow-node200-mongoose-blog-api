const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/my-blog', { useMongoClient: true });
mongoose.Promise = Promise;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));

app.get('/', (req, res) => {
	res.status(200).send();
})

module.exports = app;