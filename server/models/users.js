var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connection.query(
      'SELECT * FROM users', [],
      (err, results) => {
        if (err) {
          callback(err);
        }
        callback(null, results);
      }
    );
  },
  create: function (user, callback) {
    var {username} = user;
    var querySring = 'INSERT INTO users(username) VALUES(?)';
    var queryArgs = [username];
    db.connection.query(querySring, queryArgs, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  }
};
