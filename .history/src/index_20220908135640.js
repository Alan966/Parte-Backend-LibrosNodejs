const express = require('express')
const app = express()
const { isAdmin } = require('./middlewares/isAdmin')
const connection = require('./connection')

app.set('port', 8080)
app.set('title', 'My aplicacion esta ')
app.set('corriendo', 'corriendo')

// Para poder utilzar amazon
app.use(express.json())



// Se agrega el middleware en la aplicación.
  app.use(isAdmin);

// Routes
app.get('/dashboard', (req, res) => {
    res.send('You are an admin');
  });


app.listen(app.get('port'), () => {
    console.log(`${app.get('title')} ${app.get('corriendo')} en el puerto ${app.get('port')}`)
})
