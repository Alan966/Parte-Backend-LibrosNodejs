const express = require('express')
const path = require('path')
const connection = require('./connection')
const app = express()

//Settings
app.set('title', 'Mi aplicacion de libros')
app.set('corriendo', 'true')


//Middlewares