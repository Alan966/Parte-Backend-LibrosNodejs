const express = require('express');
const router = express.Router();

const { list, create } = require('../controllers/HeadersControllers');

//List
router.get('/all', list);
router.post('/cretae', create);
module.exports = router;