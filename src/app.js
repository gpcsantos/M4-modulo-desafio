const express = require('express');
const app = express();
const cors = require('cors');

const clienteRouter = require('./routers/cliente.router.js');
const vendaRouter = require('./routers/venda.router.js');
const livroRouter = require('./routers/livro.router.js');

// teste de resposta do banco
const Vendas = require('./models/venda.model');
const getVendas = async () => {
  return await Vendas.findAll();
};
app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  res.send(await getVendas());
});
// TODO : RETIRAR o teste

app.use('/clientes', clienteRouter);
app.use('/vendas', vendaRouter);
app.use('/livros', livroRouter);

module.exports = app;
