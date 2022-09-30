const express = require('express')
const router = express.Router()

const { getAllListings } = require("../controllers/headersControllers");
router.get('/all', getAllListings)

router.post('/create', (req, res) => {
    res.json('create')
})

router.put('/update/:id', (req, res) => {
    res.json(req.params.id)
})

router.delete('/delete/:id', (req, res) => {
    res.json(req.params.id)
})

module.exports = router