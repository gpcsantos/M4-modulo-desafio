const express = require('express');
const app = express();
const cors = require('cors');

const clienteRouter = require('./routers/cliente.router.js');

// teste de resposta do banco
const Clientes = require('./models/cliente.model');
const getClientes = async () => {
  return await Clientes.findAll();
};
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  res.send(await getClientes());
});
// TODO : RETIRAR o teste

app.use('/clientes', clienteRouter);

module.exports = app;
