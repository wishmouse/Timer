
exports.seed = function(knex, Promise) {
  return Promise.join(
       knex('buckets').del(),

     knex('buckets').insert({id: 12, userId: 1, comment: 'Tahiti: Swimming with Turtles', imageUrl: 'http://www.toptourscancun.com/images/photos/87/top-tours-cancun-cenotes-and-turtles-main.jpg'}),
     knex('buckets').insert({id: 17, userId: 1, comment: 'Learn to ride a motor cycle', imageUrl: 'https://i.ytimg.com/vi/Fw8agSotU-M/maxresdefault.jpg'}),
     knex('buckets').insert({id: 19, userId: 1, comment: 'See Machu Picchu', imageUrl: 'http://www.andeanculture.com/images/tours/machu-picchu-tour.jpg'})
  );
};
