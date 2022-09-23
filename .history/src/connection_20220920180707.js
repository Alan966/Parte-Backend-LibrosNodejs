const mongoose = require('mongoose')
const { mongodb } = require('./config')


module.exports = () => {
    const connect = () => {
        mongoose.connect(mongoose.url,{
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if (err){
                console.log('Db:Error', err)
            }else{
                console.log('Db:Conectado')
            }
        }
        )
    }

    connect()
}