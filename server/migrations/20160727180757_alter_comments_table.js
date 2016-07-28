
exports.up = function(knex, Promise) {
  return knex.schema.table('comments', table=>{
  	table.dropColumn('title')
  	table.text('user_name').defaultTo('anonymous');
  	table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex, Promise) {
	return knex.schema.table('comments', table=>{
		table.addColumn('title').notNullable();
		table.dropColumn('user_name');
		table.dropColumn('created_at');
	})
  
};
