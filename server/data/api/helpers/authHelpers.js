const knex = require("knex");
const knexConfig = require("../../../knexfile");
const db = knex(knexConfig.development);

module.exports = {
  registerUser: function(user) {
    return db.insert(user).into("users");
  },
  loginUser: function(creds) {
    return db("users")
      .where({ username: creds.username })
      .first();
  }
};
