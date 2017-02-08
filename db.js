var config = require('./db/config');
var env = process.env.NODE_ENV || 'development';
var knex = require('knex')(config[env]);

module.exports = knex;
