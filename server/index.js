require('newrelic');
const express = require ('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path'); // don't think I need these files
const db = require('../db/controller/buy.js');
const PORT = 3005;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/buytest', (req, res) => {
  const id = 1;
  db.read(id, (err, doc) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(doc);
    }
  })
});

app.get('/api/buytest/one/:id', (req, res) => {
  const id = req.params.id;
  db.read(id, (err, doc) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(doc);
    }
  })
});

app.post('/api/buytest/:id', (req, res) => {
  const param = req.body;
  console.log(req.body);
  db.create(param, (err, success) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send();
    }
  })
});

app.put('/api/buytest/:id', (req, res) => {
  const id = JSON.parse(req.params.id);
  const params = req.body;
  db.update(id, params, (err, update) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(204).send();
    }
  })

});
app.delete('/api/buytest/:id', (req, res) => {
  const id = JSON.parse(req.params.id);
  db.delete(id, (err, success) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(202).send();
    }
  })

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
