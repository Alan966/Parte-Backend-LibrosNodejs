const mongoose = require('mongoose')
const { mongodb } = require('./config')


module.exports = () => {
    const connect = () => {
        mongoose.connect(mongoose.url)
        .then(() => {
            console.log('Conectado a la base de datos')
        })
        .catch(() => {
            console.log('Error al conectar a la base de datos')
        })
    }

    connect()
}