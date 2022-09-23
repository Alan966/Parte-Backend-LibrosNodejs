const { mongodb } = require('./config')
const { MongoClient, ServerApiVersion } = require('mongodb');

const client = new MongoClient(mongodb.url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  if(err){
        console.log('Hubo un error '+err)
  }else{
        console.log('Conexión exitosa')
  }
  client.close();
});

module.exports = connect