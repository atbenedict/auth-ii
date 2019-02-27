exports.up = function(knex) {
  return knex.schema.createTable("roles", role => {
    role.increments();

    role
      .string("role", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("roles");
};
