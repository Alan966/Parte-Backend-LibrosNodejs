const express = require('express')
const path = require('path')
const connection = require('./connection')
const isAdmin = require('./middlewares/isAdmin')
const app = express()
//Settings
app.set('title', 'Mi aplicacion de libros')
app.set('corriendo', 'true')
app.set('port', 8080)

// Para poder recibir datos de un formulario
app.use(express.json())

//Middlewares
app.use(isAdmin)


app.get('/dashboard', (req, res) => {
    res.send('You are an admin');
  });

app.listen(app.get('port'), () => {
    console.log(app.get('title') + ' esta corriendo ? ' + app.get('corriendo') + ' En el puerto ' + app.get('port'))
})

