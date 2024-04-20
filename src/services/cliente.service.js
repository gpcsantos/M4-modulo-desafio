const clienteRepository = require('../repositories/cliente.respository');
const vendaRepository = require('../repositories/venda.repository');

async function getClientes() {
  return await clienteRepository.getClientes();
}

async function getCliente(id) {
  return await clienteRepository.getCliente(id);
}

async function createCliente(cliente) {
  return await clienteRepository.createCliente(cliente);
}

async function updateCliente(cliente) {
  return await clienteRepository.updateCliente(cliente);
}

async function deleteCliente(id) {
  const del = await vendaRepository.getVendaCliente(id);
  if (del.length > 0) {
    throw new Error(
      'Existe venda para esse cliente. Não é possível realizar sua exclusão'
    );
  }
  await clienteRepository.deleteCliente(id);
}

module.exports = {
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
};
