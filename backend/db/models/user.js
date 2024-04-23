'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.TimeOffRequest, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }

    async validatePassword(password) {
      return password === this.password;
    }
  }

  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Username cannot be null'
        },
        notEmpty: {
          msg: 'Username cannot be empty'
        },
        len: {
          args: [3, 50],
          msg: 'Username must be between 3 and 50 characters'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password cannot be null'
        },
        notEmpty: {
          msg: 'Password cannot be empty'
        },
        len: {
          args: [6, 255],
          msg: 'Password must be between 6 and 255 characters'
        }
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'First name cannot be null'
        },
        notEmpty: {
          msg: 'First name cannot be empty'
        },
        len: {
          args: [1, 50],
          msg: 'First name must be between 1 and 50 characters'
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Last name cannot be null'
        },
        notEmpty: {
          msg: 'Last name cannot be empty'
        },
        len: {
          args: [1, 50],
          msg: 'Last name must be between 1 and 50 characters'
        }
      }
    },
    role: {
      type: DataTypes.ENUM('Manager', 'Employee'),
      allowNull: false,
      defaultValue: 'Employee',
      validate: {
        notNull: {
          msg: 'Role cannot be null'
        },
        isIn: {
          args: [['Manager', 'Employee']],
          msg: 'Invalid role'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User'
  });

  return User;
};
