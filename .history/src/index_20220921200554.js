const express = require('express')
const app = express()
const listingsAndReviews = require('./routes/listingsAndReviews')
const connect = require('./connection')

// const isAdmin  = require('./middlewares/isAdmin')

app.set('port', 8080)
app.set('title', 'My aplicacion esta ')
app.set('corriendo', 'corriendo')

// Para poder utilzar  json
app.use(express.json())



// Se agrega el middleware en la aplicación.
//   app.use(isAdmin);

// Routes
app.get('/dashboard', (req, res) => {
    res.send('You are an admin');
  });

app.use('/listingsAndReviews', listingsAndReviews)



app.listen(app.get('port'), () => {
    console.log(`${app.get('title')} ${app.get('corriendo')} en el puerto ${app.get('port')}`)
})
