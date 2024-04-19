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
    return await livros.findByPk(id);
  } catch (error) {
    throw error;
  }
}

async function createLivro(venda) {
  try {
    return await livros.create(venda);
  } catch (error) {
    throw error;
  }
}

async function updateLivro(venda) {
  try {
    await livros.update(venda, {
      where: {
        vendaId: venda.vendaId,
      },
    });
  } catch (error) {
    throw error;
  }
  return await getLivro(venda.vendaId);
}

async function deleteLivro(id) {
  try {
    await livros.destroy({
      where: { vendaId: id },
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
