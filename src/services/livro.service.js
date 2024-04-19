const livroRepository = require('../repositories/livro.repository');

async function getLivros() {
  return await livroRepository.getLivros();
}

async function getLivro(id) {
  return await livroRepository.getLivro(id);
}

async function createLivro(livro) {
  return await livroRepository.createLivro(livro);
}

async function updateLivro(livro) {
  return await livroRepository.updateLivro(livro);
}

async function deleteLivro(id) {
  await livroRepository.deleteLivro(id);
}

module.exports = {
  getLivros,
  getLivro,
  createLivro,
  updateLivro,
  deleteLivro,
};
