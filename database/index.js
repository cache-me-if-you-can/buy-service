var mongoose = require('mongoose');
const mongoUri = 'mongodb://127.0.0.1:27017/buyingp';
const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;
