var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, users) => {
      if (err) {
        // res.end('error');
        res.sendStatus(400);
      } else {
        res.status(200).json(users);
      }
    });
  },
  post: function (req, res) {
    models.users.create(req.body, (err, result) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(201).json(result);
      }
    });
  }
};
