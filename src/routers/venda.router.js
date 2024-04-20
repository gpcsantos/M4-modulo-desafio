const express = require('express');
const { param, body, query, check } = require('express-validator');

const vendaController = require('../controllers/venda.cotroller');
const vendaValidator = require('../validations/venda.validator');

const router = express.Router();

router.get('/', vendaValidator.venda('get'), vendaController.getVendas);
router.get('/:id', vendaValidator.venda('id'), vendaController.getVenda);
// TODO: GET http://localhost:3000/venda?clienteId={clienteId}
// TODO: GET http://localhost:3000/venda?livroId={livroId}
// TODO: GET http://localhost:3000/venda?autorId={autorId}
router.post('/', vendaValidator.venda('create'), vendaController.createVenda);
router.put('/', vendaValidator.venda('update'), vendaController.updateVenda);
router.delete('/:id', vendaValidator.venda('id'), vendaController.deleteVenda);

module.exports = router;
