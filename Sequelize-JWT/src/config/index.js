require('dotenv').config(); // load .env file
// process is a global object
module.exports = {
  dbDatabase: process.env.DB_DATABASE,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbDialect: process.env.DB_DIALECT,
};
