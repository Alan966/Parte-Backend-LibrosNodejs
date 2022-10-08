const express = require('express');
const routes = express.Router()

routes.get('/', (req, res) => {
    console.log(req.flash())
    res.send('Se renderizo con exito');
})
routes.post('/', (req, res) =>{
    req.flash('darkMode', req.body.darkMode ? true : false)
    res.redirect('/')
})

module.exports = routes;