const livroRepository = require('../repositories/livro.repository');

async function getLivros() {
  return await livroRepository.getLivros();
}

async function getLivro(id) {
  // TODO: retornar as informações do PostgreSQL e do MongoDB
  return await livroRepository.getLivro(id);
}

async function createLivro(livro) {
  return await livroRepository.createLivro(livro);
}

async function updateLivro(livro) {
  return await livroRepository.updateLivro(livro);
}

async function deleteLivro(id) {
  // TODO: antes de excluir um livro, verificar se existem vendas realizadas para ele. Caso exista, bloquear a exclusão
  await livroRepository.deleteLivro(id);
}

module.exports = {
  getLivros,
  getLivro,
  createLivro,
  updateLivro,
  deleteLivro,
};
