const vendaService = require('../services/venda.service');
const { validationResult } = require('express-validator');

async function getVendas(req, res, next) {
  try {
    return res.send(await vendaService.getVendas());
  } catch (error) {
    next(error);
  }
}

async function getVenda(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.array() });
  }
  try {
    const id = parseInt(req.params.id);
    return res.send(await vendaService.getVenda(id));
  } catch (error) {
    next(error);
  }
}

async function createVenda(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.mapped() });
  }
  try {
    const venda = req.body;
    return res.send(await vendaService.createVenda(venda));
  } catch (error) {
    next(error);
  }
}

async function updateVenda(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.mapped() });
  }
  try {
    const venda = req.body;
    return res.send(await vendaService.updateVenda(venda));
  } catch (error) {
    next(error);
  }
}

async function deleteVenda(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.array() });
  }
  try {
    const id = req.params.id;
    return res.send(await vendaService.deleteVenda(id));
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getVendas,
  getVenda,
  createVenda,
  updateVenda,
  deleteVenda,
};
