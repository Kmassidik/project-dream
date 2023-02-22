'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Garage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Garage.belongsTo(models.User)
    }
  }
  Garage.init({

    type: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['car', 'motorcycle']],
          msg: "Must be 'car' or 'motorcycle'"
        },
        notEmpty: {
          args: true,
          msg: "Type cannot empty"
        }
      }
    },

    merk: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Merk cannot empty"
        }
      }
    },

    model: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Model cannot empty"
        }
      }
    },

    license_plate: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Plat Nomor cannot empty"
        }
      }
    },

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
    modelName: 'Garage',
  });
  return Garage;
};