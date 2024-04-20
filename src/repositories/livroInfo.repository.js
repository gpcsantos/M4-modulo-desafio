const { connect } = require('./mongoose.db.js');
const LivroInfoSchema = require('../schemas/livroInfo.schema.js');

async function getLivroInfo(livroId) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model('livroinfos', LivroInfoSchema);
    const query = LivroInfo.findOne({ livroId });
    return await query.exec();
  } catch (error) {
    throw error;
  }
}

async function createLivroInfo(livroInfo) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model('livroinfos', LivroInfoSchema);

    const LInfo = new LivroInfo(livroInfo);

    await LInfo.save();
  } catch (error) {
    throw error;
  }
}

async function updateLivroInfo(livroInfo) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model('livroinfos', LivroInfoSchema);

    await LivroInfo.findOneAndUpdate({ livroId: livroInfo.livroId }, livroInfo);
  } catch (error) {
    throw error;
  }
}

async function createAvaliacao(avaliacao, livroId) {
  try {
    const livroInfo = await getLivroInfo(livroId);
    livroInfo.avaliacoes.push(avaliacao);
    await updateLivroInfo(livroInfo);
  } catch (error) {
    throw error;
  }
}

async function deleteLivroInfo(livroId) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model('livroinfos', LivroInfoSchema);
    const query = LivroInfo.deleteOne({ livroId });
    await query.exec();
  } catch (error) {
    throw error;
  }
}

async function deleteAvaliacao(livroId, index) {
  try {
    const livroInfo = await getLivroInfo(livroId);
    livroInfo.avaliacoes.splice(index, 1);
    await updateLivroInfo(livroInfo);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getLivroInfo,
  createLivroInfo,
  createAvaliacao,
  updateLivroInfo,
  deleteLivroInfo,
  deleteAvaliacao,
};
