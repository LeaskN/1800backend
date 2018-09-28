const knex = require('./knex');

module.exports = {
    getAll() {
        return knex('person');
    },
    getOne(id){
        return knex('person').where('id', id).first();
    },
    create(person) {
        return knex('person').insert(person, '*');
    },
    update(id, person) {
        return knex('person').where('id', id).update(person, '*');
    },
    delete(id){
        return knex('person').where('id', id).del();
    }
}