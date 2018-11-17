const { Client } = require('pg')
const dataFile = require('../createCSV/test.csv');
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'jonathanmcnamara',
  database: 'postgres'
})

client.connect(( err ) => {
  if (err) {
    console.log('error');
  } else {
    console.log('connected');
  }
});

const seedDB = () => {
  const queryStr = `COPY company(ID, SYMBOL, COMPANYNAME, MARKETPRICE) FROM ${dataFile} DELIMITER ',' CSV HEADER`;
  client.query( queryStr, (err, res) => {
    if (err) {
      console.log('error uploading to postgres ', err);
    } else {
      console.log(res.rows[0]);
    }
  });
}

seedDB();
