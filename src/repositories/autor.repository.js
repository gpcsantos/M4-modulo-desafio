const autors = require('../models/autor.model');

async function getAutores() {
  try {
    return await autors.findAll();
  } catch (error) {
    throw error;
  }
}
async function getAutor(id) {
  try {
    return await autors.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function createAutor(autor) {
  try {
    return await autors.create(autor);
  } catch (error) {
    throw error;
  }
}

async function updateAutor(autor) {
  // TODO: O endpoint não deve permitir que o nome e autor do livro sejam alterados, evitando assim possíveis inconsistências
  try {
    await autors.update(autor, {
      where: {
        autorId: autor.autorId,
      },
    });
  } catch (error) {
    throw error;
  }
  return await getAutor(autor.autorId);
}

async function deleteAutor(id) {
  try {
    await autors.destroy({
      where: { autorId: id },
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAutores,
  getAutor,
  createAutor,
  updateAutor,
  deleteAutor,
};
