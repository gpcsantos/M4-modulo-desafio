const clienteRepository = require('../repositories/cliente.respository');

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
  // TODO: validar se tem ou não vendas para esse cliente. se tiver não é possível excluir
  await clienteRepository.deleteCliente(id);
}

module.exports = {
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
};
