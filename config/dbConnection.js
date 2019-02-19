const mongo = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/got';
const dbName = 'got';

const connMongo = async function() {
  const client = new mongo(url, { useNewUrlParser: true });

  try {
    await client.connect();

    const db = client.db(dbName);
    console.log('Estamos conectados');
    return db;
  } catch (error) {
    console.error('Tivemos um erro', error);
  }
  db.close();
};

module.exports = connMongo;
