const express = require('express');
const router = express.Router();

const { list } = require('../controllers/imagesControllers');

router.get('/all', list)

module.exports = router;