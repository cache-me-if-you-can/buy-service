const fs = require('fs');
const stringify = require('csv-stringify');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();


writer.pipe(fs.createWriteStream('log.csv', {flags: 'a'}));

const seed = () => {
  for ( var i = 9500000; i < 9500100; i ++) {
    let data = {api: `/api/buytest/one/${i}`};
    writer.write(data);
  }
};

seed();
