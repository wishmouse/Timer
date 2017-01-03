exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('buckets', function(table){
      table.increments('id')
      table.integer('userId')
      table.string('comment')
      table.string('imageUrl')
      console.log('buckets table was created')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('buckets').then(function(){
    console.log('buckets table was dropped')
  })
};
