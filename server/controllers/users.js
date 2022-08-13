var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, results) => {
      if (err) {
        res.sendStatus(400);
      } else {

        res.status(200).json(results);
      }
    });
  },
  post: function (req, res) {
    models.users.create(req.body, (err, results) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(201).json(results);
      }
    });
  }
};
