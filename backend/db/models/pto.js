'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PTO extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  
  PTO.init({
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
    totalHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        notNull: {
          msg: 'Total hours is required'
        },
        isInt: {
          msg: 'Total hours must be an integer'
        },
        min: {
          args: [0],
          msg: 'Total hours cannot be negative'
        }
      }
    },
    usedHours: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    remainingHours: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PTO',
    tableName: 'PTO'
  });

  return PTO;
};
