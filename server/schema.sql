CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
-- );

CREATE TABLE messages (
  message_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  text TEXT,
  roomname VARCHAR(20),
  PRIMARY KEY (message_id )
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  user_id INTEGER NOT NULL AUTO_INCREMENT,
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY (user_id)
);

CREATE TABLE rooms (
  room_id INTEGER NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(20) NOT NULL,
  PRIMARY KEY (room_id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

