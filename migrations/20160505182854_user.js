
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function(table){
      table.increments('id')
      table.string('userName')
      table.string('firstName')
      table.string('email')
      table.date('birthdate')
      table.string('gender')
      table.string('facebookId')
      table.string('hashedPassword')
      console.log('users table was created')
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').then(function(){
    console.log('users table was dropped')
  })
};



