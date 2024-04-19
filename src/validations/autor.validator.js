const { param, body } = require('express-validator');

function autor(menthod) {
  switch (menthod) {
    case 'id': {
      return [param('id', 'ID tem que ser número inteiro').isInt()];
    }
    case 'create': {
      return [
        body('nome', 'Nome do autor é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
        body('email', 'O email do autor é obrigatório')
          .exists()
          .notEmpty()
          .trim()
          .isEmail(),
        body('telefone', 'O telefone do autor é obrigatório')
          .exists()
          .notEmpty()
          .trim()
          .isString(),
      ];
    }
    case 'update': {
      return [
        body('autorId', 'ID do autor é obrigatório')
          .exists()
          .notEmpty()
          .trim()
          .isInt(),
        body('nome', 'Nome do autor é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
        body('email', 'O email do autor é obrigatório')
          .exists()
          .notEmpty()
          .trim()
          .isEmail(),
        body('telefone', 'O telefone do autor é obrigatório')
          .exists()
          .notEmpty()
          .trim()
          .isString(),
      ];
    }
  }
}

module.exports = { autor };
