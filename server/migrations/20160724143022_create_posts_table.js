
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table)=>{
  	table.increments();
  	table.text('title').notNullable();
  	table.text('body').notNullable();
  	table.integer('votes').defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
