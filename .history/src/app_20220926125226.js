const app = require('../src/index')
const connect = require('./connection')

// const isAdmin  = require('./middlewares/isAdmin')

app.set('port', 5050)
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

app.use('/shortDb', require('../src/routes/ShortDb.routes'))
