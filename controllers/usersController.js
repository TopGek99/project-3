const db = require("../models");
const bcrypt = require("bcrypt");

// Defining methods for the usersController
module.exports = {
  session: function (req, res) {
    res.json({
      userId: req.session.userId,
    });
  },
  logOut: function (req, res) {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  },
  find: function (req, res) {
    // console.log(req.session);
    db.User.findOne({ email: req.body.email })
      .then((dbModel) => {
        bcrypt.compare(req.body.password, dbModel.password, (err, result) => {
          req.session.loggedIn = true;
          req.session.userId = dbModel._id;
          console.log(req.session);
          res.json(dbModel);
        });
      })
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.User.create(req.body)
      .then((dbModel) => {
        req.session.loggedIn = true;
        req.session.userId = dbModel._id;
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
};
