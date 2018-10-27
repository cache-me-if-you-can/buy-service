const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

let buyingSchema = new mongoose.Schema({
  id: Number,
  symbol: String,
  name: String,
  marketPrice: Number,
},
  {
    timestamps: true
  }
);

const Buy = mongoose.model('Buy', buyingSchema);

module.exports = Buy;