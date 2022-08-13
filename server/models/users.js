var db = require('../db');

// module.exports = {
//   getAll: function (callback) {
//     db.connection.query(
//       'SELECT * FROM users', [],
//       (err, results) => {
//         if (err) {
//           callback(err);
//         }
//         callback(null, results);
//       }
//     );
//   },
//   create: function (user, callback) {
//     var {username} = user;
//     var querySring = 'INSERT INTO users(username) VALUES(?)';
//     var queryArgs = [username];
//     db.connection.query(querySring, queryArgs, (err, result) => {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null, result);
//       }
//     });
//   }
// };

// var Sequelize = require('sequelize');
// var db = new Sequelize('chat', 'root', '', {host: 'localhost', dialect: 'mysql'});

// var Users = require('../db/index.js').Users;

module.exports = {
  getAll: function(callback) {
    db.User.findAll()
      .then((users) => {
        callback(null, users);
      })
      .catch((err) => {
        callback(err);
      });
  },
  create: function(newUser, callback) {
    console.log('req body: ', newUser);
    var {username} = newUser;
    username = (username === '') ? 'anonymous' : username;
    db.User.create({username})
      .then(() => {
        callback(null, {username});
      })
      .catch((err) => {
        callback(err);
      });
  }
};
