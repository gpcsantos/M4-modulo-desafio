const Sequelize = require('sequelize');
const db = require('../repositories/db.js');
const Autores = require('./autor.model.js');

const Livros = db.define(
  'livros',
  {
    livroId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING,
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
    autorId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
  },
  { underscored: true }
);

Livros.belongsTo(Autores, { foreignKey: 'autorId' });

module.exports = Livros;
