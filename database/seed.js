const db  = require('./index.js');
var BPower = require('./BPower.js');
var Buy = require('./Buy.js');
var faker = require('faker');


var fakeId = faker.random.number();
var fakeName = faker.company.companyName();
var fakePrice = faker.finance.amount(23.46,567.98,2);
var fakeAccount = faker.finance.account();
var fakeSymbol = faker.finance.currencyCode();

const samplePostGen = function () {
  for (var i = 0; i < 100; i++) {
    let samplePosts = [
      {
        uniqId: faker.random.number(),
        symbol: faker.finance.currencyCode(),
        name: faker.company.companyName(),
        marketPrice: faker.finance.amount(23.46,567.98,2),
      }
    ]
    let samplePurchase = function() {
      Buy.create(samplePosts)
      .then(() => db.close());
    };
    samplePurchase();
  }
}

const sampleBPowerGen = function () {
  for (var i = 0; i < 100; i++) {
    let output = [
      {
        id:  faker.random.number(),
        symbol: faker.finance.currencyCode(),
        marketPrice: faker.finance.amount(23.46,567.98,2),
      },
    ]
    
    let sampleBPower = function() {
      BPower.create(output)
      .then(() => db.close());
    };
    sampleBPower();
  } 
}

samplePostGen();
sampleBPowerGen();

