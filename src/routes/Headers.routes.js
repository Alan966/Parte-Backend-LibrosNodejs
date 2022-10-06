const express = require('express');
const router = express.Router();

const { list, create, read, headerbyId, photo, remove } = require('../controllers/HeadersControllers');

//List
router.get('/all', list);
router.post('/create', create);
router.get('/:headerbyId', read)
router.param('headerbyId', headerbyId);
router.get('/photo/:headerbyId', photo)
router.delete('/:headerbyId', remove)

module.exports = router;