const express = require('express');
const vendaController = require('../controllers/venda.cotroller');
const vendaValidator = require('../validations/venda.validator');

const router = express.Router();

router.get('/', vendaController.getVendas);
router.get('/:id', vendaValidator.venda('id'), vendaController.getVenda);
router.post('/', vendaValidator.venda('create'), vendaController.createVenda);
router.put('/', vendaValidator.venda('update'), vendaController.updateVenda);
router.delete('/:id', vendaValidator.venda('id'), vendaController.deleteVenda);

module.exports = router;
