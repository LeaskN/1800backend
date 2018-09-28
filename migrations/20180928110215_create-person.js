
exports.up = function(knex, Promise) {
  return knex.schema.createTable('person', (table) => {
      table.increments();
      table.text('first');
      table.text('last');
      table.float('age');
      table.text('location');
      table.text('description');
      table.text('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('person');
};
