'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livros', {
      livro_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      estoque: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      autor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // User belongsTo Company 1:1
          model: 'autores',
          key: 'autor_id',
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('livros');
  },
};
