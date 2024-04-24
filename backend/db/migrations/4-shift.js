'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('shifts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      shiftDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      shiftStartTime: {
        type: Sequelize.TIME,
        allowNull: false
      },
      shiftEndTime: {
        type: Sequelize.TIME,
        allowNull: false
      },
      hours: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('shifts');
  }
};
