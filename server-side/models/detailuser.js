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

    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Email cannot empty"
        },
        isEmail: {
          args: true,
          msg: "Must EMAIL format (foo@bar.com)"
        }
      }
    },

    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name cannot empty"
        }
      }
    },

    date_birth: { 
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Date birth cannot empty"
        },
        isDate: {
          args: true,
          msg: "Must date format string"
        }
      }
    },

    gender: { 
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Gender cannot empty"
        },
        isIn: {
          args: [['male', 'female']],
          msg: "Must be 'male' or 'female'"
        }
      }
    },

    phone_number: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Phone number cannot empty"
        }
      }
    },

    last_login: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Please cek last login"
        }
      }
    },

    profile_picture: DataTypes.STRING,

    request_ip: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Please cek your IP"
        },
        isIP: {
          args: true,
          msg: "Something wrong with IP"
        }
      }
    },

    request_user_agent: DataTypes.STRING,

    serial: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Please check serial"
        }
      }
    }

  }, {
    sequelize,
    modelName: 'DetailUser',
  });
  return DetailUser;
};