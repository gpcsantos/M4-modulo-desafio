const express = require('express');
const livroController = require('../controllers/livro.cotroller');
const livroValidator = require('../validations/livro.validator');

const router = express.Router();

router.get('/', livroValidator.livro('get'), livroController.getLivros);
router.get('/:id', livroValidator.livro('id'), livroController.getLivro);
router.post('/', livroValidator.livro('create'), livroController.createLivro);
router.post(
  '/info',
  livroValidator.livro('createUpdateInfo'),
  livroController.createLivroInfo
);
router.post(
  '/:livroId/avaliacao',
  livroValidator.livro('createAvaliacao'),
  livroController.createAvaliacao
);
router.put('/', livroValidator.livro('update'), livroController.updateLivro);
router.put(
  '/info',
  livroValidator.livro('createUpdateInfo'),
  livroController.updateLivroInfo
);
router.delete('/:id', livroValidator.livro('id'), livroController.deleteLivro);
router.delete(
  '/info/:livroId',
  livroValidator.livro('deleteInfo'),
  livroController.deleteLivroInfo
);
router.delete(
  '/:livroId/avaliacao/:index',
  livroValidator.livro('deleteAvaliacao'),
  livroController.deleteAvaliacao
);

module.exports = router;
