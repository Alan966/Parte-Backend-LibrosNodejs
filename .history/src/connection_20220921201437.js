const mongoose = require('mongoose')
const { mongodb } = require('./config')


module.exports = () => {
    const connect = () => {
        mongoose.connect(mongodb.url, {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(client => {
            const collection = client.db("test").collection("devices");
        })
        .catch(err => console.log(err))
    }

    connect()
}