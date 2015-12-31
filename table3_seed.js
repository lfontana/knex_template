exports.seed = function (knex, Promise) {
  return knex('table3').del().then(function () {
    return Promise.all([
      knex('table3').insert({
        name: 'Sometable3name'
      }),
      knex('table3').insert({
        name: 'Someothertable3name'
      }),
      knex('table3').insert({
        name: 'Anothertable3name'
      })
    ])
  })
}
