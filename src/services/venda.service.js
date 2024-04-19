const vendaRepository = require('../repositories/venda.repository');

async function getVendas() {
  return await vendaRepository.getVendas();
}

async function getVenda(id) {
  return await vendaRepository.getVenda(id);
}

async function createVenda(venda) {
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
  createVenda,
  updateVenda,
  deleteVenda,
};
