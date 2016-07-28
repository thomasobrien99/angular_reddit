
exports.up = function(knex, Promise) {
	return knex.schema.createTable('comments', table=>{
		table.increments()
		table.integer('postID').references('posts.id')
		table.text('title').notNullable()
		table.text('body').notNullable()
		table.integer('votes').defaultTo(0)
	})  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
