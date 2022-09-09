const express = require('express')
const app = express()
// const { isAdmin } = require('./middlewares/isAdmin')
const connection = require('./connection')

app.set('port', 8080)
app.set('title', 'My aplicacion esta ')
app.set('corriendo', 'corriendo')

// Para que express pueda entender los datos que vienen en formato json
app.use(express.json());

function isAdmin (req, res, next){
    if(req.body.isAdmin){
        next();
    }else{
        res.status(403).send('Sorry but you are not admin');
    }
}

// Midlewares
app.use(isAdmin)


// Routes
app.get('/dashboard', (req, res) => {
    res.send('You are an admin');
  });


app.listen(app.get('port'), () => {
    console.log(`${app.get('title')} ${app.get('corriendo')} en el puerto ${app.get('port')}`)
})


app.use(isAdmin())