const mongoose = require('mongoose')
const { mongodb } = require('./config')


module.exports = () => {
    const connect = () => {
        mongoose.connect(mongodb.url, {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        err => {
            const collectionDb = mongoose.connection.db.collection('listingsAndReviews')
            if(err){
                console.log('Existe un error al conectarnos a la base de datos')
            }else{
                console.log('Hubo una coneccion exitosa a la base de datos')
            }
        })
    }

    connect()
}