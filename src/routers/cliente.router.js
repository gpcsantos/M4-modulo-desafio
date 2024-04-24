const express = require('express');
const clienteController = require('../controllers/cliente.cotroller');
const clienteValidator = require('../validations/cliente.validator');
const auth = require('../autorize');

const router = express.Router();

router.get('/', auth.authorize('admin'), clienteController.getClientes);
router.get(
  '/:id',
  auth.authorize('admin', 'role1'),
  clienteValidator.cliente('id'),
  clienteController.getCliente
);
router.post(
  '/',
  auth.authorize('admin'),
  clienteValidator.cliente('create'),
  clienteController.createCliente
);
router.put(
  '/',
  auth.authorize('admin', 'role1'),
  clienteValidator.cliente('update'),
  clienteController.updateCliente
); // TODO: role1 alteração somene do seu  cadastro
router.delete(
  '/:id',
  auth.authorize('admin'),
  clienteValidator.cliente('id'),
  clienteController.deleteCliente
);

module.exports = router;
