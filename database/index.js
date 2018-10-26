var mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/buying';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;
