const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
let dbInstance = null;

async function connectToDB(dbName) {
  try {
    const client = await MongoClient.connect(url);
    dbInstance = client.db(dbName);
    console.log('Conexión exitosa a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
    throw err;
  }
}

function getDB() {
  if (!dbInstance) {
    throw new Error('La conexión a MongoDB no ha sido establecida');
  }
  return dbInstance;
}

module.exports = { connectToDB, getDB };

