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
    let form  = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if(err){
            return res.status(400).json({
                error: 'There is an error in the image'
            })
        }

        const { name } = fields;
        let header = new Headers(fields);

        if(files.image){
            if(files.image.size > 1000000){
                return res.status(400).json({
                    error: 'There is an error in the image is bigger than 1mb'
                })
            }

            header.image.data = fs.readFileSync(files.image.filepath);
            header.image.contentType = files.image.mimetype;
            console.log(header)
        }

        header.save((err, result ) => {
            if(err){
                console.log(err)
                res.status(500).json({
                    error: 'There is an error in the server'
                })
            }else{
                res.status(200).json(result)
            }
        })
    });
}

const read = (req, res) => {
}

module.exports = {
    list,
    create
}