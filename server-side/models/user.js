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
    serial: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    password: DataTypes.STRING,
    locked: DataTypes.BOOLEAN,
    locked_reason: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};