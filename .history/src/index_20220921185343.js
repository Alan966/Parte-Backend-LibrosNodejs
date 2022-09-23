const express = require('express')
const app = express()
const listingsAndReviews = require('./routes/listingsAndReviews')

// const isAdmin  = require('./middlewares/isAdmin')
const connect = require('./connection')
app.set('port', 8080)
app.set('title', 'My aplicacion esta ')
app.set('corriendo', 'corriendo')

// Para poder utilzar  json
app.use(express.json())
connect()



// Se agrega el middleware en la aplicación.
//   app.use(isAdmin);

// Routes
app.get('/dashboard', (req, res) => {
    res.send('You are an admin');
  });

app.get('/listingsAndReviews', listingsAndReviews)



app.listen(app.get('port'), () => {
    console.log(`${app.get('title')} ${app.get('corriendo')} en el puerto ${app.get('port')}`)
})
