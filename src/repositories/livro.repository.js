const livros = require('../models/livro.model');

async function getLivros() {
  try {
    return await livros.findAll();
  } catch (error) {
    throw error;
  }
}
async function getLivro(id) {
  try {
    return await livros.findByPk(id, { raw: true });
  } catch (error) {
    throw error;
  }
}

async function createLivro(livro) {
  try {
    return await livros.create(livro);
  } catch (error) {
    throw error;
  }
}

async function updateLivro(livro) {
  //TODO: O endpoint não deve permitir que o nome e autor do livro sejam alterados, evitando assim possíveis inconsistências
  try {
    await livros.update(livro, {
      where: {
        livroId: livro.livroId,
      },
    });
  } catch (error) {
    throw error;
  }
  return await getLivro(livro.livroId);
}

async function deleteLivro(id) {
  try {
    await livros.destroy({
      where: { livroId: id },
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getLivros,
  getLivro,
  createLivro,
  updateLivro,
  deleteLivro,
};
