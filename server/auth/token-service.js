const jwt = require('jsonwebtoken'); // installed this library

const secrets = require('../config/secrets.js');

module.exports = {
  generateToken,
};

function generateToken(user) {
  const payload = {
    subject: user.id, // sub in payload is what the token is about
    username: user.username,
    roles: ['Student'],
    // ...otherData
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}
