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

router.post('/update/:id', (req, res) => {
     const param = req.params.id
     const data = req.body
         Header.findOneAndUpdate({_id: param}, data, (err, result) => {
            if(err){
                res.status(500).send('Error with update header')
            }else{
                console.log('Usuario actualizado con exito')
                res.redirect('/users/all')
            }
         })
} )

module.exports = router