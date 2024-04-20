const livroRepository = require('../repositories/livro.repository');
const vendaRepository = require('../repositories/venda.repository');
const autorRepository = require('../repositories/autor.repository');
const livroInfoRepository = require('../repositories/livroInfo.repository');

async function getLivros() {
  return await livroRepository.getLivros();
}

async function getLivro(id) {
  const livro = await livroRepository.getLivro(id);
  livro.avaliacoes = await livroInfoRepository.getLivroInfo(parseInt(id));

  return livro;
}
async function getLivroByAutor(id) {
  return await livroRepository.getLivroByAutor(id);
}

async function createLivro(livro) {
  const query = await autorRepository.getAutor(livro.autorId);
  if (!query) {
    throw new Error('Autor informado não existe');
  }

  return await livroRepository.createLivro(livro);
}

async function createLivroInfo(livroInfo) {
  const query = await livroInfoRepository.getLivroInfo(livroInfo.livroId);
  if (query) {
    throw new Error('Não é possível criar mais de uma Info para o mesmo livro');
  }
  await livroInfoRepository.createLivroInfo(livroInfo);
}

async function createAvaliacao(avaliacao, livroId) {
  await livroInfoRepository.createAvaliacao(avaliacao, livroId);
}

async function updateLivro(livro) {
  return await livroRepository.updateLivro(livro);
}

async function updateLivroInfo(livroInfo) {
  const query = await livroInfoRepository.getLivroInfo(livroInfo.livroId);
  if (!query) {
    throw new Error('Não existe INFO para o livro informado');
  }

  return await livroInfoRepository.updateLivroInfo(livroInfo);
}
async function deleteLivroInfo(livroId) {
  const query = await livroInfoRepository.getLivroInfo(livroId);
  if (!query) {
    throw new Error('Não existe INFO para o livro informado');
  }

  return await livroInfoRepository.deleteLivroInfo(livroId);
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

async function deleteAvaliacao(livroId, index) {
  await livroInfoRepository.deleteAvaliacao(parseInt(livroId), index);
}

module.exports = {
  getLivros,
  getLivro,
  getLivroByAutor,
  createLivro,
  createLivroInfo,
  createAvaliacao,
  updateLivro,
  updateLivroInfo,
  deleteLivro,
  deleteLivroInfo,
  deleteAvaliacao,
};
