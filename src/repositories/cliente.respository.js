const clientes = require('../models/cliente.model');

async function getLogin(username, password) {
  try {
    return await clientes.findOne({
      where: { email: username, senha: password },
      raw: true,
    });
  } catch (error) {
    throw error;
  }
}
async function getClienteByEmail(username) {
  try {
    return await clientes.findOne({
      where: { email: username },
      raw: true,
    });
  } catch (error) {
    throw error;
  }
}
async function getClientes() {
  try {
    return await clientes.findAll({
      attributes: { exclude: ['senha'] },
    });
  } catch (error) {
    throw error;
  }
}
async function getCliente(id) {
  try {
    return await clientes.findByPk(id, {
      attributes: { exclude: ['senha'] },
    });
  } catch (error) {
    throw error;
  }
}

async function createCliente(cliente) {
  try {
    return await clientes.create(cliente);
  } catch (error) {
    throw error;
  }
}

async function updateCliente(cliente) {
  try {
    await clientes.update(cliente, {
      where: {
        clienteId: cliente.clienteId,
      },
    });
  } catch (error) {
    throw error;
  }
  return await getCliente(cliente.clienteId);
}

async function deleteCliente(id) {
  try {
    await clientes.destroy({
      where: { clienteId: id },
    });
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getLogin,
  getClienteByEmail,
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
};
