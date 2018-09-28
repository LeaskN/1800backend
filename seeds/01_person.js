const people = require('../people');

exports.seed = function(knex, Promise) {
  return knex('person').del()
    .then(function () {
      return knex('person').insert(people);
    });
};
