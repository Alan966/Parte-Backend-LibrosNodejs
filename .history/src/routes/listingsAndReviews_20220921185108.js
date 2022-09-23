const express = require('express')
const router = express.Router()

const controlles = require('../controllers/ListingsAndReviews')

router.get('/all', controlles.getAllListings)
router.get('/create', controlles.createListing)
router.get('/delete/:id', controlles.updateListing)
router.get('/update/:id', controlles.deleteListing)

module.exports = router