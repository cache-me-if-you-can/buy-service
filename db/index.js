const { Client } = require('pg')
const client = new Client({
  user: 'power_user',
  host: 'ec2-13-52-78-138.us-west-1.compute.amazonaws.com',
  database: 'sell',
  password: 'password',
  port: '5432'
})

client.connect(( err ) => {
  if (err) {
    console.log(err, 'error, cannot connect to db');
  } else {
    console.log('connected');
  }
});


module.exports = client;
