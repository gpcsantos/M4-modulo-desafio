const { param, body } = require('express-validator');

function livro(menthod) {
  switch (menthod) {
    case 'id': {
      return [param('id', 'ID tem que ser número inteiro').isInt()];
    }
    case 'create': {
      return [
        body('nome', 'Nome do livro é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
        body('valor', 'O valor do livro é obrigatório')
          .exists()
          .notEmpty()
          .isDecimal()
          .trim()
          .trim(),
        body('estoque', 'O estoque do livro é obrigatório')
          .exists()
          .notEmpty()
          .trim()
          .isInt(),
        body('autorId', 'O ID do autor é obrigatório')
          .exists()
          .notEmpty()
          .trim()
          .isInt(),
      ];
    }
    case 'update': {
      return [
        body('livroId', 'ID do livro é obrigatório')
          .exists()
          .notEmpty()
          .trim()
          .isInt(),
        body('nome', 'Nome do livro é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
        body('valor', 'O valor do livro é obrigatório')
          .exists()
          .notEmpty()
          .trim()
          .isDecimal(),
        body('estoque', 'O estoque do livro é obrigatório')
          .exists()
          .notEmpty()
          .trim()
          .isInt(),
        body('autorId', 'O ID do autor é obrigatório')
          .exists()
          .notEmpty()
          .trim()
          .isInt(),
      ];
    }
  }
}

module.exports = { livro };
