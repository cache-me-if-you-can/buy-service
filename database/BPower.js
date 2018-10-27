const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

let buyingPowerSchema = new mongoose.Schema({
  id: Number,
  symbol: String, 
  marketPrice: Number,
});

const BuyingPower = mongoose.model('Buying Power', buyingPowerSchema);

module.exports = BuyingPower;