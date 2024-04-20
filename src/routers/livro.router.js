const express = require('express');
const livroController = require('../controllers/livro.cotroller');
const livroValidator = require('../validations/livro.validator');

const router = express.Router();

router.get('/', livroController.getLivros);
// TODO:  http://localhost:3000/livro?autorId={autorId}
// TODO: POST http://localhost:3000/livro/info MONGO DB
// TODO: PUT http://localhost:3000/livro/info MONGO DB
// TODO: DELETE http://localhost:3000/livro/info/{livroId} MONGO DB
// TODO: POST http://localhost:3000/livro/{livroId}/avaliacao MONGO DB
// TODO: DELETE http://localhost:3000/livro/{livroId}/avaliacao/{index} MONGO DB
router.get('/:id', livroValidator.livro('id'), livroController.getLivro);
router.post('/', livroValidator.livro('create'), livroController.createLivro);
router.put('/', livroValidator.livro('update'), livroController.updateLivro);
router.delete('/:id', livroValidator.livro('id'), livroController.deleteLivro);

module.exports = router;
