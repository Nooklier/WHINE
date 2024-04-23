'use strict';

const { User } = require('../models');
const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password', 10);
    
    await User.bulkCreate([
      {
        username: 'john_doe',
        password: hashedPassword,
        firstName: 'John',
        lastName: 'Doe',
        role: 'Employee'
      },
      {
        username: 'jane_doe',
        password: hashedPassword,
        firstName: 'Jane',
        lastName: 'Doe',
        role: 'Employee'
      },
      {
        username: 'admin_user',
        password: hashedPassword,
        firstName: 'Admin',
        lastName: 'User',
        role: 'Manager'
      },
      {
        username: 'alice_smith',
        password: hashedPassword,
        firstName: 'Alice',
        lastName: 'Smith',
        role: 'Employee'
      },
      {
        username: 'bob_jones',
        password: hashedPassword,
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
