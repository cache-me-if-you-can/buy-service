const mongoose = require('mongoose');
const db = require('./index.js');
var random = require('mongoose-random');
mongoose.Promise = global.Promise;

let buyingSchema = new mongoose.Schema({
  id: Number,
  symbol: String,
  name: String,
  marketPrice: Number,
},
{
  timestamps: true
});

buyingSchema.plugin(random, { path: 'r' });


const Buy = mongoose.model('Buy', buyingSchema);

module.exports = Buy;