const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

const Images = require('../models/Imagesmodels');

const list = (req, res) => {
    res.status(200).json({
        message: 'All images'
    })
}

module.exports = {
    list
}
