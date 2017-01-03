exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('stats').del(),
    knex('stats').insert({id: 1, causeOfDeath: 'Coronary Heart Disease', age: '15-24', rank: 1 , gender: 'female'}),
    knex('stats').insert({id: 2, causeOfDeath: 'Stroke', age: '15-24', rank: 2, gender: 'female'}),
    knex('stats').insert({id: 3, causeOfDeath: 'Lung disease', age: '15-24', rank: 3, gender: 'female'}),
    knex('stats').insert({id: 4, causeOfDeath: 'Lung cancer', age: '15-24', rank: 4, gender: 'female'}),
    knex('stats').insert({id: 5, causeOfDeath: 'Alzheimers', age: '15-24', rank: 3, gender: 'female'}),
    knex('stats').insert({id: 6, causeOfDeath: 'Coronary Heart Disease', age: '15-24', rank: 1 , gender: 'male'}),
    knex('stats').insert({id: 7, causeOfDeath: 'Lung cancer', age: '15-24', rank: 2, gender: 'male'}),
    knex('stats').insert({id: 8, causeOfDeath: 'Lung disease', age: '15-24', rank: 3, gender: 'male'}),
    knex('stats').insert({id: 9, causeOfDeath: 'Hypertension', age: '15-24', rank: 4, gender: 'male'}),
    knex('stats').insert({id: 10, causeOfDeath: 'Alzheimers', age: '15-24', rank: 3, gender: 'male'})
  );
};

