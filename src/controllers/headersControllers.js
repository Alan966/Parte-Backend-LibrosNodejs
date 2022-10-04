const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

const Headers = require('../models/HeadersModels');

const list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name'

    Headers.find()
    .select("-photo")
    .sort([[sortBy, order]])
    // .populate() sirve para hacer referencias a otros modelos
    .exec((err, result) => {
        if(err) res.status(500).json({
            error: 'There is an error in the serve'
        })
        res.status(200).json(result)
    })

}

const create = (req, res) => {
    res.json('should create a new header')
}

module.exports = {
    list,
    create
}