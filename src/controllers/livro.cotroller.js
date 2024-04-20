const livroService = require('../services/livro.service');

const { validationResult } = require('express-validator');

async function getLivros(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.array() });
  }

  let response = [];
  try {
    if (Object.keys(req.query).length === 0) {
      response = await livroService.getLivros();
    } else {
      response = await livroService.getLivroByAutor(req.query.autorId);
    }
    return res.send(response);
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

async function createLivroInfo(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.mapped() });
  }
  try {
    let livroInfo = req.body;

    if (!livroInfo.livroId) {
      throw new Error('Livro ID é obrigatório');
    }

    await livroService.createLivroInfo(livroInfo);
    res.end();
    // logger.info(`POST - /product/info - ${JSON.stringify(livroInfo)}`);
  } catch (error) {
    next(error);
  }
}

async function createAvaliacao(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.mapped() });
  }
  try {
    const livroId = req.params.livroId;
    const avaliacao = req.body;
    if (!req.params.livroId) {
      throw new Error('Livro ID é obrigatório');
    }

    res.send(await livroService.createAvaliacao(avaliacao, livroId));
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
    const livro = {
      livroId: req.body.livroId,
      valor: req.body.valor,
      estoque: req.body.estoque,
    };
    return res.send(await livroService.updateLivro(livro));
  } catch (error) {
    next(error);
  }
}

async function updateLivroInfo(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.mapped() });
  }
  try {
    let livroInfo = {
      livroId: req.body.livroId,
      descricao: req.body.descricao,
      paginas: req.body.paginas,
      editora: req.body.editora,
    };

    if (!livroInfo.livroId) {
      throw new Error('Product ID é obrigatório');
    }

    await livroService.updateLivroInfo(livroInfo);
    res.end();
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

async function deleteLivroInfo(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.array() });
  }
  try {
    let livroId = req.params.livroId;

    if (!req.params.livroId) {
      throw new Error('Livro ID é obrigatório');
    }

    await livroService.deleteLivroInfo(parseInt(livroId));
    res.end();
  } catch (error) {
    next(error);
  }
}

async function deleteAvaliacao(req, res, next) {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erro: erros.array() });
  }
  try {
    let livroId = req.params.livroId;
    let index = req.params.index;

    if (!req.params.livroId && !req.params.index) {
      throw new Error('Livro ID e INDEX são obrigatório');
    }

    await livroService.deleteAvaliacao(parseInt(livroId), index);
    res.end();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getLivros,
  getLivro,
  createLivro,
  createLivroInfo,
  createAvaliacao,
  updateLivro,
  updateLivroInfo,
  deleteLivro,
  deleteLivroInfo,
  deleteAvaliacao,
};
