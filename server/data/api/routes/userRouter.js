const express = require("express");
const router = express.Router();
const helper = require("../helpers/userHelpers");

router.get("/", (req, res) => {
  if (req.session) {
    helper
      .getUsers()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err =>
        res.status(500).json({ errorMessage: "cant receive users" })
      );
  }
});

module.exports = router;
