const express = require('express');
const livroController = require('../controllers/livro.cotroller');
const livroValidator = require('../validations/livro.validator');

const router = express.Router();

router.get('/', livroValidator.livro('get'), livroController.getLivros);
router.get('/:id', livroValidator.livro('id'), livroController.getLivro);
router.post('/', livroValidator.livro('create'), livroController.createLivro);
router.post('/info', livroController.createLivroInfo); // TODO: fazer validations
router.post('/:livroId/avaliacao', livroController.createAvaliacao); // TODO: fazer validations
router.put('/', livroValidator.livro('update'), livroController.updateLivro);
router.put('/info', livroController.updateLivroInfo); // TODO: fazer validations
router.delete('/:id', livroValidator.livro('id'), livroController.deleteLivro);
router.delete('/info/:livroId', livroController.deleteLivroInfo); // TODO: fazer validations
router.delete('/:livroId/avaliacao/:index', livroController.deleteAvaliacao); // TODO: fazer validations

module.exports = router;
