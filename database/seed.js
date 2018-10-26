const db  = require('./index.js');


const samplePosts = [
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

console.log('------->', db);
const samplePurchase = function() {
  db.Buy.create(samplePosts)
    .then(() => db.db.disconnect());
};

const sampleBPower = function() {
  db.BPower.create(output)
    .then(() => db.db.disconnect());
};
samplePurchase();
sampleBPower();