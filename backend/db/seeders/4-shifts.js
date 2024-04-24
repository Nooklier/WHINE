const { Shift } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await Shift.bulkCreate([
      {
        userId: 1,
        shiftDate: '2024-04-25',
        shiftStartTime: '09:00:00',
        shiftEndTime: '17:00:00',
        hours: 8.0
      },
      {
        userId: 2,
        shiftDate: '2024-04-26',
        shiftStartTime: '08:00:00',
        shiftEndTime: '16:00:00',
        hours: 8.0
      },
      {
        userId: 3,
        shiftDate: '2024-04-27',
        shiftStartTime: '10:00:00',
        shiftEndTime: '18:00:00',
        hours: 8.0
      },
      {
        userId: 4,
        shiftDate: '2024-04-28',
        shiftStartTime: '07:00:00',
        shiftEndTime: '15:00:00',
        hours: 8.0
      },
      {
        userId: 5,
        shiftDate: '2024-04-29',
        shiftStartTime: '09:00:00',
        shiftEndTime: '17:00:00',
        hours: 8.0
      }
    ], options);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Shifts';
    
    return queryInterface.bulkDelete(options, {
      shiftDate: { [Sequelize.Op.in]: ['2024-04-25', '2024-04-26', '2024-04-27', '2024-04-28', '2024-04-29'] }
    }, {});
  }
};
