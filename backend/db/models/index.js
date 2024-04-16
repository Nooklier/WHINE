'use strict';                                                                                           // This enables strict mode which helps catch common coding mistakes and "unsafe" actions.

const fs = require('fs');                                                                               // Include the file system module to work with the file system.
const path = require('path');                                                                           // Include the path module to work with file and directory paths.
const Sequelize = require('sequelize');                                                                 // Include Sequelize, a tool to talk to your database.
const process = require('process');                                                                     // Include the process module to access environment variables and other process-related information.
const basename = path.basename(__filename);                                                             // Get the name of the current file.
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
