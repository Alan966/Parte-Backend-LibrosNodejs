const express = require('express')
const router = express.Router()

const { getHeaders, createHeaders, updateHeaders, deleteHeaders } = require("../controllers/headersControllers");
router.get('/all', getHeaders)

router.post('/create', createHeaders)

router.put('/update/:id', updateHeaders)

router.delete('/delete/:id', deleteHeaders)

module.exports = router