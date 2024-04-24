const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Shift extends Model {

    static associate(models) {
      
      this.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }

  Shift.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'User ID is required'
        }
      }
    },
    shiftDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Shift date is required'
        }
      }
    },
    shiftStartTime: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Shift start time is required'
        }
      }
    },
    shiftEndTime: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Shift end time is required'
        }
      }
    },
    hours: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Hours is required'
        },
        isFloat: {
          msg: 'Hours must be a number'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Shift'
  });

  return Shift;
};
