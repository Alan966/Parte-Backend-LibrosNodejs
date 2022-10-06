const express = require('express')
const app = express()
const connect = require('./connection')
const logger = require('morgan')
const cors = require('cors')
// const isAdmin  = require('./middlewares/isAdmin')

app.set('port', 5050)
app.set('title', 'My aplicacion esta ')
app.set('corriendo', 'corriendo')

// Para poder utilzar  json


//Middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(cors())
connect()
// Se agrega el middleware en la aplicación.
//   app.use(isAdmin);

// Routes
app.get('/dashboard', (req, res) => {
    res.send('You are an admin');
});

app.use('/shortDb', require('../src/routes/ShortDb.routes'))
app.use('/headers', require('../src/routes/Headers.routes'))
app.use('/images', require('../src/routes/Images.routes'))

app.listen(app.get('port'), () => {
    console.log(`${app.get('title')} ${app.get('corriendo')} en el puerto ${app.get('port')}`)
})

module.exports = app


