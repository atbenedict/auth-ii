const router = require('express').Router();

const Users = require('../users/users-model.js');
const restricted = require('../auth/restricted-middleware.js');
const checkRole = require('../auth/check-role-middleware.js');

// router.get('/', restricted, checkRole('Student'), (req, res) => {
router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json({ users, decodedToken: req.decodedJwt });
    })
    .catch(err => res.send(err));
});

// async/await example
// router.get('/users', restricted, async (req, res) => {
//   try {
//     const users = await Users.find();

//     res.json(users);
//   } catch (error) {
//     res.send(error);
//   }
// });

module.exports = router;
