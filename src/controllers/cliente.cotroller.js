const clienteService = require('../services/cliente.service');
const { validationResult } = require('express-validator');

async function getClientes(req, res, next) {
  try {
    return res.send(await clienteService.getClientes());
  } catch (error) {
    next(error);
  }
}

async function getCliente(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.array() });
  }
  try {
    const id = parseInt(req.params.id);
    return res.send(await clienteService.getCliente(id));
  } catch (error) {
    next(error);
  }
}

async function createCliente(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.mapped() });
  }
  try {
    const cliente = req.body;
    return res.send(await clienteService.createCliente(cliente));
  } catch (error) {
    next(error);
  }
}

async function updateCliente(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.mapped() });
  }
  try {
    const cliente = req.body;
    return res.send(await clienteService.updateCliente(cliente));
  } catch (error) {
    next(error);
  }
}

async function deleteCliente(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.array() });
  }
  try {
    const id = req.params.id;
    return res.send(await clienteService.deleteCliente(id));
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
};
