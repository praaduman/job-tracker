/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('jobs',function(table){
    table.increments("id").primary();
    table.string("company").notNullable();
    table.string("position").notNullable();
    table.string("status").notNullable().defaultTo("applied");
    table.string("location").notNullable();
    table.text('notes');
    table.string("job_url");
    table.date("applied_date").notNullable().defaultTo(knex.fn.now());
    table.timestamps(true,true)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
