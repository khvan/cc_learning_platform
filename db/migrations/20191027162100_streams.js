
exports.up = function(knex) {
  return knex.schema.createTable("streams", t => {
    t.bigIncrements("id");
    t.string("title");
    t.string("description");
    t.string("userId");
    t.integer("likes_count");
    t.timestamp('created_at').defaultTo(knex.fn.now());
});
};


exports.down = function(knex) {
  return knex.schema.dropTable("streams");
}