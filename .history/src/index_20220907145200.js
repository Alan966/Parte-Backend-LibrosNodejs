const express = require('express')
const path = require('path')
const connection = require('./connection')
const isAdmin = require('./middlewares/isAdmin')
const app = express()
//Settings
app.set('title', 'Mi aplicacion de libros')
app.set('corriendo', 'true')
app.set('port', 8080)


//Middlewares
app.use(isAdmin)

app.get('/dashword', (res, res) => {
    res.send('You are in the dashword')
})

app.listen(app.get('port'), () => {
    console.log(app.get('title') + 'esta corriendo ? ' + app.get('corriendo') + 'En el puerto ' + app.get('port'))
})

