const livroService = require('../services/livro.service');
const { validationResult } = require('express-validator');

async function getLivros(req, res, next) {
  try {
    return res.send(await livroService.getLivros());
  } catch (error) {
    next(error);
  }
}

async function getLivro(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.array() });
  }
  try {
    const id = parseInt(req.params.id);
    return res.send(await livroService.getLivro(id));
  } catch (error) {
    next(error);
  }
}

async function createLivro(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.mapped() });
  }
  try {
    const livro = req.body;
    return res.send(await livroService.createLivro(livro));
  } catch (error) {
    next(error);
  }
}

async function updateLivro(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.mapped() });
  }
  try {
    const livro = req.body;
    return res.send(await livroService.updateLivro(livro));
  } catch (error) {
    next(error);
  }
}

async function deleteLivro(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.array() });
  }
  try {
    const id = req.params.id;
    return res.send(await livroService.deleteLivro(id));
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getLivros,
  getLivro,
  createLivro,
  updateLivro,
  deleteLivro,
};
