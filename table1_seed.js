
exports.seed = function (knex, Promise) {
  return knex('table1').del().then(function () {
    return Promise.all([
      knex('table1').insert({
        year: '2015',
        name: 'Somename',
        url: 'www.someurl.com',
        true_false: 'true',
        text1: 'Some text1.',
        text2: 'Some text2.',
        text3: 'Some text3.',
        text4: 'Some text4.'
      }),
      knex('table1').insert({
        year: '2014',
        name: 'Someothername',
        url: 'www.someotherurl.com',
        true_false: 'false',
        text1: 'Some other text1.',
        text2: 'Some other text2.',
        text3: 'Some other text3.',
        text4: 'Some other text4.'
      }),
      knex('table1').insert({
        year: '2013',
        name: 'Anothername',
        url: 'www.anotherurl.com',
        true_false: 'true',
        text1: 'Some additional text1.',
        text2: 'Some additional text2.',
        text3: 'Some additional text3.',
        text4: 'Some additional text4.'
      })
    ])
  })
}
