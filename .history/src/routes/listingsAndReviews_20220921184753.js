const express = require('express')
const router = express.Router()

const controlles = require('../controllers/ListingsAndReviews')

router.get('/all', controlles.getAllListings)
router.get('/create', controlles.createListing)
router.get('/delete', controlles.updateListing)
router.get('/update', controlles.deleteListing)