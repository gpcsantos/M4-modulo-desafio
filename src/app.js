const express = require('express');
const app = express();
const cors = require('cors');

const clienteRouter = require('./routers/cliente.router.js');
const vendaRouter = require('./routers/venda.router.js');
const livroRouter = require('./routers/livro.router.js');
const autorRouter = require('./routers/autor.router.js');

app.use(express.json());
app.use(cors());

app.use('/clientes', clienteRouter);
app.use('/vendas', vendaRouter);
app.use('/livros', livroRouter);
app.use('/autores', autorRouter);

app.use((err, req, res, next) => {
  // global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

module.exports = app;
