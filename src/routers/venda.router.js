const express = require('express');
const auth = require('../autorize');

const vendaController = require('../controllers/venda.cotroller');
const vendaValidator = require('../validations/venda.validator');

const router = express.Router();

router.get(
  '/',
  auth.authorize('admin'),
  vendaValidator.venda('get'),
  vendaController.getVendas
);
router.get(
  '/:id',
  auth.authorize('admin', 'role1'),
  vendaValidator.venda('id'),
  vendaController.getVenda
); // TODO: consulta somente vendas com seu ID, validar o ID do endpoint com o ID do usuário da autenticação
router.post(
  '/',
  auth.authorize('admin', 'role1'),
  vendaValidator.venda('create'),
  vendaController.createVenda
); // TODO: venda somente para seu ID - sumulação de compra pelo cliente
router.delete(
  '/:vendaId/livroId/:livroId',
  auth.authorize('admin'),
  vendaController.deleteVenda
);

module.exports = router;
