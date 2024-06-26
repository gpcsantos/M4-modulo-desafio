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
    if (error.name === 'SequelizeForeignKeyConstraintError') {
      throw new Error(
        'Não é possível exluir Autor, pois existem livros atribuidos à ele. Primeiro exclua todos os livros do autor'
      );
    }
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
