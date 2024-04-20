const { param, body, checkSchema } = require('express-validator');

function livro(menthod) {
  switch (menthod) {
    case 'get': {
      return [
        checkSchema({
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
        checkSchema({
          autorId: {
            in: 'body',
            isInt: true,
            optional: true,
            errorMessage: 'ID do autor precisa ser número inteiro',
          },
          nome: {
            in: 'body',
            isString: true,
            notEmpty: true,
            optional: true,
            errorMessage:
              'O nome do autor precisa ser String e não pode estar vazio',
          },
        }),
        body('livroId', 'ID do livro é obrigatório')
          .exists()
          .notEmpty()
          .trim()
          .isInt(),
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
      ];
    }
  }
}

module.exports = { livro };
