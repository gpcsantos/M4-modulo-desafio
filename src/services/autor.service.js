const autorRepository = require('../repositories/autor.repository');

async function getAutores() {
  return await autorRepository.getAutores();
}

async function getAutor(id) {
  return await autorRepository.getAutor(id);
}

async function createAutor(autor) {
  return await autorRepository.createAutor(autor);
}

async function updateAutor(autor) {
  return await autorRepository.updateAutor(autor);
}

async function deleteAutor(id) {
  await autorRepository.deleteAutor(id);
}

module.exports = {
  getAutores,
  getAutor,
  createAutor,
  updateAutor,
  deleteAutor,
};
