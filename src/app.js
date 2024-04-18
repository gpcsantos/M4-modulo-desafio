const express = require('express');
const app = express();

// teste de resposta do banco
const Clientes = require('./models/cliente.model');
const getClientes = async () => {
  return await Clientes.findAll();
};
// TODO : RETIRAR o teste

app.use(express.json());
app.get('/', async (req, res) => {
  res.send(await getClientes());
});

module.exports = app;
