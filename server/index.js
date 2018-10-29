const express = require ('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const PORT = 3003;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});