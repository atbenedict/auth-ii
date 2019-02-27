exports.up = function(knex) {
  return knex.schema.createTable("permissions", permission => {
    permission.increments();

    permission
      .string("permission", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("permissions");
};
