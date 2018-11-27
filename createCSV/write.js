const fs = require('fs');
const stringify = require('csv-stringify');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const symbol = require('../util/utils.js');


writer.pipe(fs.createWriteStream('out.csv', {flags: 'a'}));

const seed = (start) => {
  for (var i = start; i < 10000000; i ++) {
    let data = {
      id: i,
      symbol: symbol.numToSymbol(i),
      name: faker.company.companyName(),
      marketPrice: faker.finance.amount(2.46, 567.98, 2)
    };

    var res = writer.write(data);
    if (!res) {
      break;
    }
  }
  if (!res) {
    writer.once('drain', () => {
      seed(i + 1);
    });
  }
};

seed(0);
