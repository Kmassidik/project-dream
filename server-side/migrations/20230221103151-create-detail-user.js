'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('DetailUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      date_birth: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      last_login: {
        type: Sequelize.STRING
      },
      profile_picture: {
        type: Sequelize.STRING
      },
      request_ip: {
        type: Sequelize.STRING
      },
      request_user_agent: {
        type: Sequelize.STRING
      },
      serial: {
        type: Sequelize.STRING,
        unique: true,
        references: {
          model: 'Users', // name of Target model
          key: 'serial', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DetailUsers');
  }
};