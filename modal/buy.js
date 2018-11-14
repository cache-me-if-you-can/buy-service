const Buy = require('../database/Buy.js');

module.exports.create = (query, callback) => {
  const buy = new Buy(query);
  buy.save((err) => {
    if (err) {
      callback(err);
    } else {
      console.log('in save func at no error pos');
      callback(null, 'success');
    }
  });
};

module.exports.update = (id, query, callback) => {
  Buy.findOneAndUpdate({id}, {...query}, (err, doc)=> {
    if (err) {
      callback(err, null);
    } else {
      console.log('updated');
      callback(null, doc);
    }
  });
}
module.exports.read = (id, callback) => {
  Buy.find( {id: id}, (err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
}

module.exports.delete = (id, callback) => {
  Buy.deleteMany({id}, function (err) {
    if (err){
      console.log('err in deleting');
      callback(err);
    } else {
      callback(null, 'deleted');
    }
  });
};
