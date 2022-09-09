const express = require('express')
const router = express.Router()
const Header = require('../models/Header')

router.get('/all', (req, res) => {
    Header.find({}, (err, result) => {
        if(err){
            console.log('Ha ocurrido un error al obtener los datos')
        }else{
            res.send(result)
        }
    })

})

router.post('/create', (req, res) => {
    const data = req.body
    const liHeader  = new Header({
        title: data.title,
        description: data.description
    })

    liHeader.save((err, result) => {
        if(err){
            res.status(500).send('Error with create header')
        }else{
            res.status(200).send('Create header with success')
            res.redirect('/header/all')
            }

    })
})

module.exports = router