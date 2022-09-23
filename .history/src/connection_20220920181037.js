const mongoose = require('mongoose')
const { mongodb } = require('./config')


module.exports = () => {
    const connect = () => {
        mongoose.connect(mongodb.url)
        .then(() => {
            console.log('Conectado a la base de datos')
        })
        .catch(err => {
            console.log('Error al conectar a la base de datos' + err)
        })
    }

    connect()
}