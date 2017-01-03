// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'times'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'times'
    }
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
