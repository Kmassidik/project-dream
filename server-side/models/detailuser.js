'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetailUser.belongsTo(models.User)
    }
  }
  DetailUser.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    date_birth: DataTypes.STRING,
    gender: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    last_login: DataTypes.STRING,
    profile_picture: DataTypes.STRING,
    request_ip: DataTypes.STRING,
    request_user_agent: DataTypes.STRING,
    serial: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DetailUser',
  });
  return DetailUser;
};