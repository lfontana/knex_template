exports.seed = function (knex, Promise) {
  return knex('table4').del().then(function () {
    return Promise.all([
      knex('table4').insert({
        name: 'Sometable4name'
      }),
      knex('table4').insert({
        name: 'Someothertable4name'
      }),
      knex('table4').insert({
        name: 'Anothertable4name'
      })
    ])
  })
}
