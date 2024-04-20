const vendas = require('../models/venda.model');
const livros = require('../models/livro.model');

async function getVendas() {
  try {
    return await vendas.findAll();
  } catch (error) {
    throw error;
  }
}
async function getVenda(id) {
  try {
    return await vendas.findByPk(id);
  } catch (error) {
    throw error;
  }
}
async function getVendaCliente(clienteId) {
  try {
    return await vendas.findAll({ where: { clienteId }, raw: true });
  } catch (error) {
    throw error;
  }
}

async function getVendaLivro(livroId) {
  try {
    return await vendas.findAll({ where: { livroId } });
  } catch (error) {
    throw error;
  }
}

async function getVendaAutor(autorId) {
  try {
    return await vendas.findAll({
      include: { model: livros, where: { autorId } },
    });
  } catch (error) {
    throw error;
  }
}

async function getVendaByVendaLivro(vendaId, livroId) {
  try {
    return await vendas.findAll({ where: { vendaId, livroId } });
  } catch (error) {
    throw error;
  }
}
async function createVenda(venda) {
  try {
    return await vendas.create(venda);
  } catch (error) {
    throw error;
  }
}

async function updateVenda(venda) {
  try {
    await vendas.update(venda, {
      where: {
        vendaId: venda.vendaId,
      },
    });
  } catch (error) {
    throw error;
  }
  return await getVenda(venda.vendaId);
}

async function deleteVenda(id) {
  try {
    await vendas.destroy({
      where: { vendaId: id },
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getVendas,
  getVenda,
  getVendaCliente,
  getVendaLivro,
  getVendaAutor,
  getVendaByVendaLivro,
  createVenda,
  updateVenda,
  deleteVenda,
};
