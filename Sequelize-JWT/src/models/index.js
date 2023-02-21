const { Sequelize } = require('sequelize');
const config = require('../config/index');

// ket noi CSDL
const sequelize = new Sequelize(
  config.dbDatabase,
  config.dbUsername,
  config.dbPassword,
  {
    host: config.dbHost,
    port: config.dbPort,
    dialect: config.dbDialect,
  }
);

module.exports = sequelize;
