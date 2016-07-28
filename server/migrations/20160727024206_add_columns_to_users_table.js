
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', (table)=>{
  	table.text('user_id').notNullable()
  	table.text('user_img_url').defaultTo('https://lorempixel.com/50/50');
  	table.text('user_name').defaultTo('anonymous');
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', (table)=>{
  	table.dropColumn('user_id')
  	table.dropColumn('user_img_url')
  	table.dropColumn('user_name')
  })
};
