'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PTO', [
      {
        userId: 1,
        totalHours: 80,
        usedHours: 40,
        remainingHours: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        totalHours: 80,
        usedHours: 50,
        remainingHours: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        totalHours: 80,
        usedHours: 60,
        remainingHours: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        totalHours: 80,
        usedHours: 70,
        remainingHours: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        totalHours: 80,
        usedHours: 80,
        remainingHours: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('PTO', null, {});
  }
};
