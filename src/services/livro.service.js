const livroRepository = require('../repositories/livro.repository');
const vendaRepository = require('../repositories/venda.repository');

async function getLivros() {
  return await livroRepository.getLivros();
}

async function getLivro(id) {
  // TODO: retornar as informações do PostgreSQL e do MongoDB
  return await livroRepository.getLivro(id);
}
async function getLivroByAutor(id) {
  return await livroRepository.getLivroByAutor(id);
}

async function createLivro(livro) {
  return await livroRepository.createLivro(livro);
}

async function updateLivro(livro) {
  return await livroRepository.updateLivro(livro);
}

async function deleteLivro(id) {
  const del = await vendaRepository.getVendaLivro(id);
  if (del.length > 0) {
    throw new Error(
      'Existe vendas para o livro informado. Não é possível realizar sua exclusão.'
    );
  }
  await livroRepository.deleteLivro(id);
}

module.exports = {
  getLivros,
  getLivro,
  getLivroByAutor,
  createLivro,
  updateLivro,
  deleteLivro,
};
