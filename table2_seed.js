exports.seed = function (knex, Promise) {
  return knex('table2').del().then(function () {
    return Promise.all([
      knex('table2').insert({
        name: 'Sometable2name'
      }),
      knex('table2').insert({
        name: 'Someothertable2name'
      }),
      knex('table2').insert({
        name: 'Anothertable2name'
      })
    ])
  })
}
