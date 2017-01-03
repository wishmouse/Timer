exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('stats', function(table){
      table.increments('id')
      table.string('causeOfDeath')
      table.string('age')
      table.integer('rank')
      table.string('gender')
      console.log('stats table was created')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('stats').then(function(){
    console.log('stats table was dropped')
  })
};
