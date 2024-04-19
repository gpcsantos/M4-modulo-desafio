const express = require('express');
const autorController = require('../controllers/autor.cotroller');
const autorValidator = require('../validations/autor.validator');

const router = express.Router();

router.get('/', autorController.getAutores);
router.get('/:id', autorValidator.autor('id'), autorController.getAutor);
router.post('/', autorValidator.autor('create'), autorController.createAutor);
router.put('/', autorValidator.autor('update'), autorController.updateAutor);
router.delete('/:id', autorValidator.autor('id'), autorController.deleteAutor);

module.exports = router;
