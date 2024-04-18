const Sequelize = require('sequelize');
const db = require('../repositories/db.js');
const Clientes = require('./cliente.model.js');
const Livros = require('./livro.model.js');

const Vendas = db.define(
  'vendas',
  {
    vendaId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    valor: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    clienteId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    livroId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
  },
  { underscored: true }
);

Vendas.belongsTo(Clientes, { foreignKey: 'clienteId' });
Vendas.belongsTo(Livros, { foreignKey: 'livroId' });

module.exports = Vendas;
