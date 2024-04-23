'use strict';

const { User } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        username: 'john_doe',
        password: 'password',
        firstName: 'John',
        lastName: 'Doe',
        role: 'Employee'
      },
      {
        username: 'jane_doe',
        password: 'password',
        firstName: 'Jane',
        lastName: 'Doe',
        role: 'Employee'
      },
      {
        username: 'admin_user',
        password: 'password',
        firstName: 'Admin',
        lastName: 'User',
        role: 'Manager'
      },
      {
        username: 'alice_smith',
        password: 'password',
        firstName: 'Alice',
        lastName: 'Smith',
        role: 'Employee'
      },
      {
        username: 'bob_jones',
        password: 'password',
        firstName: 'Bob',
        lastName: 'Jones',
        role: 'Employee'
      }
    ], options);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Users';
    
    return queryInterface.bulkDelete(options, {
      username: { [Sequelize.Op.in]: ['john_doe', 'jane_doe', 'admin_user', 'alice_smith', 'bob_jones'] }
    }, {});
  }
};
