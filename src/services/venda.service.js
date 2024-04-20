const vendaRepository = require('../repositories/venda.repository');
const livroRepository = require('../repositories/livro.repository');
const clienteRepository = require('../repositories/cliente.respository');

async function getVendas() {
  return await vendaRepository.getVendas();
}

async function getVenda(id) {
  return await vendaRepository.getVenda(id);
}

async function getVendaCliente(clienteId) {
  return await vendaRepository.getVendaCliente(clienteId);
}

async function getVendaLivro(livroId) {
  return await vendaRepository.getVendaLivro(livroId);
}

async function getVendaAutor(autorId) {
  return await vendaRepository.getVendaAutor(autorId);
}

async function createVenda(venda) {
  const error = [];
  if (!(await clienteRepository.getCliente(venda.clienteId))) {
    error.push('Cliente não encontrado');
  }
  const livro = await livroRepository.getLivro(venda.livroId);
  if (!livro) {
    error.push('Livro não encontrado');
  }
  if (error.length > 0) {
    throw new Error(error);
  }
  if (livro.estoque === 0) {
    throw new Error('Estoque insuficiente');
  }

  venda.valor = livro.valor;
  livro.estoque--;

  await livroRepository.updateLivro(livro);
  return await vendaRepository.createVenda(venda);
}

async function updateVenda(venda) {
  return await vendaRepository.updateVenda(venda);
}

async function deleteVenda(id) {
  // TODO: validar se tem ou não vendas para esse venda. se tiver não é possível excluir
  await vendaRepository.deleteVenda(id);
}

module.exports = {
  getVendas,
  getVenda,
  getVendaCliente,
  getVendaLivro,
  getVendaAutor,
  createVenda,
  updateVenda,
  deleteVenda,
};
