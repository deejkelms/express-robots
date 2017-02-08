// Formerly known as knexfile.js

module.exports = {

  development: {
    client: 'pg',
    connection: {
      user: 'robot',
      password: 'r0b0t!',
      databse: 'robots_dev'
    },
    migrations: {
      directory: __dirname+"/migrations"
    },
    seeds: {
      directory: __dirname+"/seeds"
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname+'/migrations'
    },
    seeds: {
      directory: __dirname+"/seeds"
    }
  }

};
