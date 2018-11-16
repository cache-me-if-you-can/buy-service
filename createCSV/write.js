const fs = require('fs');
const stringify = require('csv-stringify');
const faker = require('faker');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();

writer.pipe(fs.createWriteStream('out.csv', {flags: 'a'}))

const seed = () => {

  for ( let i = 0; i < 10000; i ++) {
    let data = {
      id: i,
      symbol: faker.finance.currencyCode(),
      name: faker.company.companyName(),
      marketPrice: faker.finance.amount(23.46, 567.98, 2)
    };
    writer.write(data);
  }
};
//commiting
seed();
