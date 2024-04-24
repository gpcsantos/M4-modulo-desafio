const express = require('express');
const autorController = require('../controllers/autor.cotroller');
const autorValidator = require('../validations/autor.validator');
const auth = require('../autorize');

const router = express.Router();

router.get('/', auth.authorize('admin'), autorController.getAutores);
router.get(
  '/:id',
  auth.authorize('admin'),
  autorValidator.autor('id'),
  autorController.getAutor
);
router.post(
  '/',
  auth.authorize('admin'),
  autorValidator.autor('create'),
  autorController.createAutor
);
router.put(
  '/',
  auth.authorize('admin'),
  autorValidator.autor('update'),
  autorController.updateAutor
);
router.delete(
  '/:id',
  auth.authorize('admin'),
  autorValidator.autor('id'),
  autorController.deleteAutor
);

module.exports = router;
