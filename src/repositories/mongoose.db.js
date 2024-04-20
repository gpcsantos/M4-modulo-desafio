import mongoose from 'mongoose';

async function connect() {
  const uri =
    'mongodb://gpcsantos:0zjBZFVgOFGeX7zz@ac-dnphfef-shard-00-00.064vncj.mongodb.net:27017,ac-dnphfef-shard-00-01.064vncj.mongodb.net:27017,ac-dnphfef-shard-00-02.064vncj.mongodb.net:27017/?replicaSet=atlas-ha21ue-shard-0&ssl=true&authSource=admin';

  const clientOptions = {
    serverApi: { version: '1', strict: true, deprecationErrors: true },
  };
  const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  return await mongoose.connect(uri, clientOptions);
}

export { connect };
