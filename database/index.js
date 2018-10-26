var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/buying');

mongoose.connection.once('open', function() {
  console.log('connection is OPEN');
}).on('error',function(error) {
  console.log('Connection ERROR', error);
})

let buying = new mongoose.Schema({
  id: Number,
  symbol: String,
  name: String,
  marketPrice: Number,
  created_At: String,
});

let bPower = new mongoose.Schema({
  id: Number,
  user: String, 
  marketPrice: Number,
});

let Buy = mongoose.model('Buy', buying);
let bPower = mongoose.model('bPower', buying);

/*
Do I need to set up another MongoDB instance for this directory?
How do I see the state of these Schemas?

let buyingSelling = new mongoose.Schema({
  id: Number,
  symbol: String,
  name: String,
  marketPrice: Number,
  created_At: String,
});

let buyingPower = new mongoose.Schema({
  id: Number,
  user: String, //?
  marketPrice: Number,
});

const tradingApiOutput = [
  {
    uniqId: 123,
    symbol: 'aapl',
    name: 'Apple',
    marketPrice: 100,
    created_at: "2017-05-03T03:50:00Z",
  },
 ]

let output = [
  {
    id: 000123,
    symbol: 'aapl',
    marketPrice: 24,
  },
]



*/
module.exports = Buy;
module.exports = bPower;