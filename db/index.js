const { Client } = require('pg')
const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'jonathanmcnamara',
  database: 'sell'
})

client.connect(( err ) => {
  if (err) {
    console.log('error');
  } else {
    console.log('connected');
  }
});


module.exports = client;
