const vendaRepository = require('../repositories/venda.repository');

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
  // TODO: antes de cadastrar a venda é necessário verificar se o livro tem estoque maior que zero Se não tiver estoque, um erro deve ser retornado ao usuário informando o que ocorreu
  // TODO: O valor da venda neste endpoint é  buscada da tabela do livro e inserida no registro da venda
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
