const { param, body, checkSchema } = require('express-validator');

function venda(menthod) {
  switch (menthod) {
    case 'get': {
      return [
        checkSchema({
          clienteId: {
            in: 'query',
            isInt: true,
            optional: true,
            errorMessage: 'ID precisa ser número inteiro',
          },
          livroId: {
            in: 'query',
            isInt: true,
            optional: true,
            errorMessage: 'ID precisa ser número inteiro',
          },
          autorId: {
            in: 'query',
            isInt: true,
            optional: true,
            errorMessage: 'ID precisa ser número inteiro',
          },
        }),
      ];
    }
    case 'id': {
      return [param('id', 'ID tem que ser número inteiro').isInt()];
    }
    case 'create': {
      return [
        body('data', 'Data é obrigatório').exists().notEmpty(),
        body('data', 'Data no formatdo inválido').isISO8601().toDate(),
        body('clienteId', 'O ID do cliente é obrigatório')
          .exists()
          .notEmpty()
          .isInt(),
        body('livroId', 'o ID do livro é obrigatório')
          .exists()
          .notEmpty()
          .isInt(),
      ];
    }
  }
}

module.exports = { venda };
