// backend/config/database.js

const config = require('./index');                  // Load the main configuration settings from 'index.js'.

module.exports = {

  development: {                                    // Settings for when the app is in development mode:
    storage: config.dbFile,                         // Where to store the database file.
    dialect: "sqlite",                              // What database language to use (sqlite).
    seederStorage: "sequelize",                     // Where to store data about the seeders (tools that add initial data to your database).
    logQueryParameters: true,                       // Whether to show details about database queries in logs.
    typeValidation: true                            // Whether to check that the data types are correct when data is saved.
  },

  production: {                                     // Settings for when the app is in production mode:
    use_env_variable: 'DATABASE_URL',               // Get the database connection string from an environment variable.
    dialect: 'postgres',                            // What database language to use (Postgres).
    seederStorage: 'sequelize',                     // Where to store data about the seeders in production.
    dialectOptions: {
      ssl: {
        require: true,                              // Requires SSL to connect to the database for security.
        rejectUnauthorized: false                   // Determines whether to reject unauthorized connections.
      } 
    },
    define: {
      schema: process.env.SCHEMA                    // Set the database schema from an environment variable.
    }
  }

};
