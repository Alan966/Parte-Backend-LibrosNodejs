const express = require('express')
const router = express.Router()
const Header = require('../models/Header')

router.get('/all', (req, res) => {
    res.send('All headers')
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
            }

        res.render('header/all', {headers: result})
    })
})

module.exports = router