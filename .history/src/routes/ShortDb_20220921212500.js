const express = require('express')
const router = express.Router()

const controlles = require('../controllers/ListingsAndReviews')

router.get('/all', controlles.getAllListings)
router.post('/create', controlles.createListing)
router.put('/update/:id', controlles.updateListing)
router.delete('/delete/:id', controlles.deleteListing)

module.exports = router