const autorRepository = require('../repositories/autor.repository');
const livroRepository = require('../repositories/livro.repository');

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
  // Verificação pode ser feita pelo banco de dados caso haja constraint, tratamento do erro está no repository
  // Consulta é valida quando não há constriant no banco de dados
  const del = await livroRepository.getLivroByAutor(id);
  if (del.length > 0) {
    throw new Error(
      'Não é possível exluir Autor, pois existem livros atribuidos à ele. Primeiro exclua todos os livros do autor'
    );
  }
  await autorRepository.deleteAutor(id);
}

module.exports = {
  getAutores,
  getAutor,
  createAutor,
  updateAutor,
  deleteAutor,
};
