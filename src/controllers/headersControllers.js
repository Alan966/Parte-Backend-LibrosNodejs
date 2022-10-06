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
    req.header.image = undefined;
    return res.json(req.header);
}

const headerbyId = (req, res, next, id) => {
    Headers.findById(id)
    .exec((err, result ) => {
        if(err || !result){
            return res.status(400).json({
                error: "There is an error in headerbyId"
            })
        }
        req.header = result;
        next();
    })
}

const photo = (req, res , next) => {
    if(req.header.image.data){
        res.set(
            'Content-Type', req.header.image.contentType
        )
        return res.send(req.header.image.data)
    }
}

const remove = (req, res) => {
    let header = req.header;
    header.remove((err, result ) => {
        if(err){
            return res.status(400).json({
                error : 'There is an error in the server'
            })
        }
        res.status(200).json({
            message: 'The header is deleted'
        })
    })
}

module.exports = {
    list,
    create,
    read,
    headerbyId,
    photo,
    remove
}