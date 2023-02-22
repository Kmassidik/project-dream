'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.DetailUser)
      User.hasMany(models.Garage)
    }
  }
  User.init({

    serial: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Please Check Again Serial"
        }
      }
    },

    phone_number: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Phone Number Cannot Empty"
        }
      }
    },

    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Password Cannot Empty"
        }
      }
    },

    locked: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: {
          args: true,
          msg: "Locked Cannot Empty"
        }
      }
    },

    locked_reason: DataTypes.TEXT
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};