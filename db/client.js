const knexConnector = require("knex");

const knexDevelopmentConfig = require("../knexfile").development;

const client = knexConnector(knexDevelopmentConfig);

module.exports = client;