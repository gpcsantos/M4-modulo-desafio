const { param, body } = require('express-validator');

function cliente(menthod) {
  switch (menthod) {
    case 'id': {
      return [param('id', 'ID tem que ser número inteiro').isInt()];
    }
    case 'create': {
      return [
        body('nome', 'Nome é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
        body('email', 'E-mail é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
        body('senha', 'Senha é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
        body('telefone', 'Telefone é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
        body('endereco', 'Endereco é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
      ];
    }
    case 'update': {
      return [
        body('clienteId', 'ID é obrigatório')
          .exists()
          .notEmpty()
          .trim()
          .isInt(),
        body('nome', 'Nome é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
        body('email', 'E-mail é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
        body('senha', 'Senha é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
        body('telefone', 'Telefone é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
        body('endereco', 'Endereco é obrigatório')
          .exists()
          .notEmpty()
          .isString()
          .trim(),
      ];
    }
  }
}

module.exports = { cliente };
