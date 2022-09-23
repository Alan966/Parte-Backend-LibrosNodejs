const mongoose = require('mongoose')
const { mongodb } = require('./config')



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.ijhug8t.mongodb.net/?retryWrites=true&w=majority";
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