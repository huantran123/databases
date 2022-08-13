// var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'

// module.exports.connection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'chat'
// });

var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '', {dialect: 'mysql'});

var Message = db.define('Message', {
  username: Sequelize.STRING,
  text: Sequelize.TEXT,
  roomname: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
}, {
  tableName: 'Messages'
});

var User = db.define('User', {
  username: Sequelize.STRING,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
}, {
  tableName: 'Users'
});

db.sync();
// Message.sync();
// User.sync();

exports.Message = Message;
exports.User = User;