const express = require ('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path'); // don't think I need these files
const modalBuy = require('../modal/buy.js');
const db = require('../database/index.js'); // don't think I need these files
const dbuy = require('../database/Buy.js');
const dpower = require('../database/BPower.js');
const PORT = 3005;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/buytest', (req, res) => {
  dbuy.findRandom().limit(10).exec((err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});

app.get('/api/buytest/one/:id', (req, res) => {
  const id = JSON.parse(req.params.id);
  modalBuy.read(id, (err, doc) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(JSON.stringify(doc))
    }
  })
});

app.post('/api/buytest/:id', (req, res) => {
  const param = req.body;
  modalBuy.create(param, (err, success) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send('lovin life');
    }
  })
});
// app.post('/api/bpowertest', (req, res) => {
//   const param = req.body;
//   modalBPower.create(param, (err, success) => {
//     if (err) {
//       res.status(500).send();
//     } else {
//       res.status(201).send(success);
//     }
//   })
// });
app.put('/api/buytest/:id', (req, res) => {
  const id = JSON.parse(req.params.id);
  const params = req.body;
  modalBuy.update(id, params, (err, update) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(204).send();
    }
  })

});
app.delete('/api/buytest/:id', (req, res) => {
  const id = JSON.parse(req.params.id);
  modalBuy.delete(id, (err, success) => {
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
