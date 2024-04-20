const express = require('express');

const vendaController = require('../controllers/venda.cotroller');
const vendaValidator = require('../validations/venda.validator');

const router = express.Router();

router.get('/', vendaValidator.venda('get'), vendaController.getVendas);
router.get('/:id', vendaValidator.venda('id'), vendaController.getVenda);
router.post('/', vendaValidator.venda('create'), vendaController.createVenda);
router.delete('/:vendaId/livroId/:livroId', vendaController.deleteVenda);

module.exports = router;
