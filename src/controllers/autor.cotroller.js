const autorService = require('../services/autor.service');
const { validationResult } = require('express-validator');

async function getAutores(req, res, next) {
  try {
    return res.send(await autorService.getAutores());
  } catch (error) {
    next(error);
  }
}

async function getAutor(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.array() });
  }
  try {
    const id = parseInt(req.params.id);
    return res.send(await autorService.getAutor(id));
  } catch (error) {
    next(error);
  }
}

async function createAutor(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.mapped() });
  }
  try {
    const autor = req.body;
    return res.send(await autorService.createAutor(autor));
  } catch (error) {
    next(error);
  }
}

async function updateAutor(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.mapped() });
  }
  try {
    const autor = req.body;
    return res.send(await autorService.updateAutor(autor));
  } catch (error) {
    next(error);
  }
}

async function deleteAutor(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.array() });
  }
  try {
    const id = req.params.id;
    return res.send(await autorService.deleteAutor(id));
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAutores,
  getAutor,
  createAutor,
  updateAutor,
  deleteAutor,
};
