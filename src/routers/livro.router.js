const express = require('express');
const livroController = require('../controllers/livro.cotroller');
const livroValidator = require('../validations/livro.validator');
const auth = require('../autorize');

const router = express.Router();

router.get(
  '/',
  auth.authorize('admin', 'role1'),
  livroValidator.livro('get'),
  livroController.getLivros
);
router.get(
  '/:id',
  auth.authorize('admin', 'role1'),
  livroValidator.livro('id'),
  livroController.getLivro
);
router.post(
  '/',
  auth.authorize('admin'),
  livroValidator.livro('create'),
  livroController.createLivro
);
router.post(
  '/info',
  auth.authorize('admin'),
  livroValidator.livro('createUpdateInfo'),
  livroController.createLivroInfo
);
router.post(
  '/:livroId/avaliacao',
  auth.authorize('admin', 'role1'),
  livroValidator.livro('createAvaliacao'),
  livroController.createAvaliacao
);
router.put(
  '/',
  auth.authorize('admin'),
  livroValidator.livro('update'),
  livroController.updateLivro
);
router.put(
  '/info',
  auth.authorize('admin'),
  livroValidator.livro('createUpdateInfo'),
  livroController.updateLivroInfo
);
router.delete(
  '/:id',
  auth.authorize('admin'),
  livroValidator.livro('id'),
  livroController.deleteLivro
);
router.delete(
  '/info/:livroId',
  auth.authorize('admin'),
  livroValidator.livro('deleteInfo'),
  livroController.deleteLivroInfo
);
router.delete(
  '/:livroId/avaliacao/:index',
  auth.authorize('admin'),
  livroValidator.livro('deleteAvaliacao'),
  livroController.deleteAvaliacao
);

module.exports = router;
