'use strict';
const { Model, Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TimeOffRequest extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  
  TimeOffRequest.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'User ID is required'
        },
        isInt: {
          msg: 'User ID must be an integer'
        }
      }
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Start date is required'
        },
        isDate: {
          msg: 'Start date must be a valid date'
        },
        isAfter: {
          args: Sequelize.literal('CURRENT_DATE'),
          msg: 'Start date must be after today'
        }
      }
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'End date is required'
        },
        isDate: {
          msg: 'End date must be a valid date'
        },
        isAfterStart(value) {
          if (new Date(value) <= new Date(this.startDate)) {
            throw new Error('End date must be after start date');
          }
        }
      }
    },
    usedPto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Used PTO is required'
        },
        isInt: {
          msg: 'Used PTO must be an integer'
        },
        min: {
          args: 0,
          msg: 'Used PTO cannot be negative'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'TimeOffRequest',
    tableName: 'TimeOffRequests'
  });

  return TimeOffRequest;
};
