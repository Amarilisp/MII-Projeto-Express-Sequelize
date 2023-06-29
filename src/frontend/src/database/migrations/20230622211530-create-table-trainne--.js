"use strict"; // atividade 04

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("trainne", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      rg: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },

      cpf: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },

      primary_phone_contact: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      secundary_phone_contact: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      date_birth: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      father_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      mother_name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      have_special_needs: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("trainne");
  },
};
