const express = require('express');
const livroController = require('../controllers/livro.cotroller');
const livroValidator = require('../validations/livro.validator');

const router = express.Router();

router.get('/', livroController.getLivros);
router.get('/:id', livroValidator.livro('id'), livroController.getLivro);
router.post('/', livroValidator.livro('create'), livroController.createLivro);
router.put('/', livroValidator.livro('update'), livroController.updateLivro);
router.delete('/:id', livroValidator.livro('id'), livroController.deleteLivro);

module.exports = router;
