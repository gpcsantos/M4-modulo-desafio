const mongoose = require('mongoose');

const AvaliacaoSchema = new mongoose.Schema({
  nome: String,
  nota: Number,
  avaliacao: String,
});

module.exports = AvaliacaoSchema;
