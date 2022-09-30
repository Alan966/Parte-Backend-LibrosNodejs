const express = require('express')
const app = express()
const connect = require('./connection')
const logger = require('morgan')
// const isAdmin  = require('./middlewares/isAdmin')

app.set('port', 5050)
app.set('title', 'My aplicacion esta ')
app.set('corriendo', 'corriendo')

// Para poder utilzar  json
app.use(express.json())
connect()

//Middlewares
app.use(logger('dev'))

// Se agrega el middleware en la aplicación.
//   app.use(isAdmin);

// Routes
app.get('/dashboard', (req, res) => {
    res.send('You are an admin');
});

app.use('/shortDb', require('../src/routes/ShortDb.routes'))
app.use('/headers', require('../src/routes/Headers.routes'))

app.listen(app.get('port'), () => {
    console.log(`${app.get('title')} ${app.get('corriendo')} en el puerto ${app.get('port')}`)
})

module.exports = app