const express = require('express');
const clienteController = require('../controllers/cliente.cotroller');
const clienteValidator = require('../validations/cliente.validator');

const router = express.Router();

router.get('/', clienteController.getClientes);
router.get(
  '/:id',
  clienteValidator.cliente('id'),
  clienteController.getCliente
);
router.post(
  '/',
  clienteValidator.cliente('create'),
  clienteController.createCliente
);
router.put(
  '/',
  clienteValidator.cliente('update'),
  clienteController.updateCliente
);
router.delete(
  '/:id',
  clienteValidator.cliente('id'),
  clienteController.deleteCliente
);

module.exports = router;
