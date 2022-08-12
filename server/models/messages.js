var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.connection.query(
      'SELECT * FROM messages', [],
      (err, results) => {
        if (err) {
          callback(err);
        }
        callback(null, results);
      }
    );
  }, // a function which produces all the messages
  create: function (message, callback) {
    var {username, text, roomname} = message;
    var querySring = 'INSERT INTO messages(username, text, roomname) VALUES(?, ?, ?)';
    var queryArgs = [username, text, roomname];
    db.connection.query(querySring, queryArgs, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null, {username, text, roomname});
      }
    });
  } // a function which can be used to insert a message into the database
};
