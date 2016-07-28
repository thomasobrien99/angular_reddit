
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', table=>{
  	table.text('img_url').defaultTo('http://lorempixel.com/200/200')
  	table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts' ,table=>{
  	table.dropColumn('img_url');
  	table.dropColumn('created_at');
  })
};
