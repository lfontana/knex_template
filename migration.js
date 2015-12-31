exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('table1', function (table) {
      table.increments('table1id').primary()
      table.integer('year')
      table.string('name')
      table.string('url')
      table.boolean('true_false')
      table.dateTime('created_at')
      table.dateTime('updated_at')
      table.text('text1')
      table.timestamps('created_at')
      table.time('time')
      table.text('text2')
      table.string('text3')
      table.string('text4')
    }),
    knex.schema.createTable('table2', function (table) {
      table.increments('table2id').primary()
      table.integer('table1_id').unsigned().references('table1id').inTable('movie')
      table.string('name')
    }),
    knex.schema.createTable('table3', function (table) {
      table.increments('table3id').primary()
      table.integer('table1_id').unsigned().references('table1id').inTable('movie')
      table.string('name')
    }),
    knex.schema.createTable('table4', function (table) {
      table.increments('table4id').primary()
      table.integer('table1_id').unsigned().references('table1id').inTable('movie')
      table.string('name')
    })
  ])
}
exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('table1'),
    knex.schema.dropTableIfExists('table2'),
    knex.schema.dropTableIfExists('table3'),
    knex.schema.dropTableIfExists('table4')
  ])
}
