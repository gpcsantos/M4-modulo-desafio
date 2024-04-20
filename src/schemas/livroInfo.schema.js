const mongoose = require('mongoose');

const AvaliacaoSchema = require('./avalicao.schema.js');

const LivroInfoSchema = new mongoose.Schema({
  livroId: Number,
  descricao: String,
  paginas: Number,
  editora: String,
  avaliacoes: [],
});

module.exports = LivroInfoSchema;
