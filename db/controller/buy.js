const Client = require('../index.js');


module.exports.create = (query, callback) => {
  const queryStr = `INSERT INTO company (id, symbol, companyname, marketprice) VALUES (${query.id}, '${query.symbol}', '${query.companyname}', ${query.marketprice})`;
  Client.query(queryStr, (err) => {
    if (err) {
      console.log('query error, did not create', err);
      callback(err);
    } else {
      console.log('successful insert into');
      callback(null, 'success');
    }
  });
};

module.exports.update = (id, query, callback) => {
  const queryStr = `UPDATE company SET marketprice = ${query.marketprice} WHERE id = ${id}`;
  Client.query(queryStr, (err)=> {
    if (err) {
      console.log('insert error');
      callback(err);
    } else {
      console.log('successful update');
      callback(null, 'success');
    }
  });
};

module.exports.read = (id, callback) => {
  const queryStr = `SELECT * FROM company WHERE id = ${id}`;
  Client.query( queryStr, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};


module.exports.delete = (id, callback) => {
  const queryStr = `DELETE FROM company WHERE id = ${id}`;
  Client.query(queryStr, (err) => {
    if (err) {
      callback(err);
    } else {
      callback('Deleted successfully');
    }

  });
};

module.exports.delete = (id, callback) => {
  Buy.deleteMany({id}, function (err) {
    if (err) {
      console.log('err in deleting');
      callback(err);
    } else {
      callback(null, 'deleted');
    }
  });
};
