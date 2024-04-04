const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_DB_URL

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const database = client.db("db_richeese")