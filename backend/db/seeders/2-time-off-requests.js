'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('TimeOffRequests', [
      {
        userId: 1,
        startDate: new Date('2024-05-01'),
        endDate: new Date('2024-05-03'),
        usedPto: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        startDate: new Date('2024-05-10'),
        endDate: new Date('2024-05-12'),
        usedPto: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        startDate: new Date('2024-06-01'),
        endDate: new Date('2024-06-03'),
        usedPto: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        startDate: new Date('2024-06-10'),
        endDate: new Date('2024-06-12'),
        usedPto: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 5,
        startDate: new Date('2024-07-01'),
        endDate: new Date('2024-07-03'),
        usedPto: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('TimeOffRequests', null, {});
  }
};
