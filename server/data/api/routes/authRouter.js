const express = require("express");
const router = express.Router();
const helper = require("../helpers/authHelpers");
const bcrypt = require("bcryptjs");

router.post("/register", (req, res) => {
  let user = req.body;
  if (!user.username) {
    res.status(400).json({ errorMessage: "missing username" });
  }
  if (!user.password) {
    res.status(400).json({ errorMessage: "missing password" });
  }
  const hash = bcrypt.hashSync(user.password, 12);
  user.password = hash;

  helper
    .registerUser(user)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(err =>
      res.status(500).json({ errorMessage: "error registering user." })
    );
});

router.post("/login", (req, res) => {
  const creds = req.body;
  if (!creds.username) {
    res.status(400).json({ message: "missing username" });
  }
  if (!creds.password) {
    res.status(400).json({ message: "missing password" });
  }
  helper
    .loginUser(creds)
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        req.session.user = user;
        res.status(200).json({ message: `Welcome Aboard ${user.username}!` });
      } else {
        res.status(401).json({ message: "no Bueno" });
      }
    })
    .catch(err => {
      res.status(500).json({ errorMessage: err });
    });
});

router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send("wow you are stuck");
      } else {
        res.send("toodles");
      }
    });
  } else {
    res.end();
  }
});

function restricted(req, res, next) {
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "You shall not pass!" });
  }
}

module.exports = router;
