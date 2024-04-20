const connect = require('./mongoose.db.js');
const LivroInfoSchema = require('../schemas/livroInfo.schema.js');

async function getLivroInfo(livroId) {
  try {
    const mongoose = await connect();
    const LivroInfo = mongoose.model('livroInfo', LivroInfoSchema);
    const query = LivroInfo.findOne({ livroId });
    return await query.exec();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getLivroInfo,
};
