const express = require('express');
const app = express();
const cors = require('cors');
const basicAuth = require('express-basic-auth');

const clienteRouter = require('./routers/cliente.router.js');
const vendaRouter = require('./routers/venda.router.js');
const livroRouter = require('./routers/livro.router.js');
const autorRouter = require('./routers/autor.router.js');

const {
  getLogin,
  getClienteByEmail,
} = require('./services/cliente.service.js');

app.use(express.json());
app.use(cors());

app.use(basicAuth({ authorizer: myAuthorizer, authorizeAsync: true }));

async function myAuthorizer(username, password, cb) {
  let userMatches = basicAuth.safeCompare(username, 'admin');
  let pwdMatches = basicAuth.safeCompare(password, '1234');

  const authDB = await getLogin(username, password);
  if (authDB) {
    userMatches = basicAuth.safeCompare(username, authDB.email);
    pwdMatches = basicAuth.safeCompare(password, authDB.senha);
  }
  const auth = userMatches && pwdMatches;

  return cb(null, auth);
}

app.use('/clientes', clienteRouter);
app.use('/vendas', vendaRouter);
app.use('/livros', livroRouter);
app.use('/autores', autorRouter);

app.use((err, req, res, next) => {
  // global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

module.exports = app;
