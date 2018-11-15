const BPower = require('./BPower.js');

module.exports.create = (query, callback) => {
  BPOWER.save(query, (err, docs) => {
    if (err) {
      callback(err);
    } else {
      callback(docs);
    }
  });
};

module.exports.put = (id, query, callback) => {
  BPower.findById(id, function (err,bPower) {
  if (err) return handleError(err);
  bPower.set(query);
  bPower.save(function (err, updatedBPower) {
    if (err) {
    callback(err);
  }
    callback(updatedBPower);
  });
});
}
module.exports.read = (id) => {
  BPower.find((err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
}
module.exports.delete = (id, callback) => {
  BPOWER.deleteMany({id}, function (err) {
    if (err){
      callback(err);
    } else {
      callback('deleted');
    }
  });
};
