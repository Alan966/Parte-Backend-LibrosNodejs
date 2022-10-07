const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

const Images = require('../models/Imagesmodels');

const list = (req, res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : 'name';

    Images.find()
    .select("-image")
    .populate('headers')
    .sort([[sortBy, order]])
    .exec((err, result) => {
        if(err){
            return res.status(400).json({
                error: 'Images has an error'
            })
        }
        res.json(result)
    })
}

const imageId = (req, res, next, id) => {
    Images.findById(id)
    .populate('headers')
    .exec((err, image ) => {
        if(err || !image){
            return res.status(400).json({
                error: 'image not found'
            })
        }
        req.image = image;
        next();
    })

}

const createImage = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req,(err, fields, files) => {
        if(err){
            return res.status(400).json({
                error: 'There is an error in create image'+ err
            })
        }

        let { name , headers } = fields;
        let image = new Images(fields);

        if(files.image){
            if(files.image.size > 1000000){
                return res.status(400).json({
                    error: 'Image size is too big'
                })
            }

            image.image.data = fs.readFileSync(files.image.filepath);
            image.image.contentType = files.image.mimetype;
        }

        image.save((err, result) => {
            if(err){
                return res.status(400).json({
                    error: 'There is an error in create image' + err
                })
            }
            res.json(result);
        })
    })
}

const read = (req, res) => {
    req.image.image = undefined;
    return res.json(req.image);
}

const image = (req, res, next) => {
    if(req.image.image.data){
        res.set('Content-Type', req.image.image.contentType);
        return res.send(req.image.image.data);
    }
    next();
}

const remove = (req, res) => {
    let image = req.image;
    image.remove((err, result) => {
        if(err){
            return res.status(400).json({
                error: 'There is an error in delete image'
            })
        }
        res.json({
            message: 'Image deleted successfully'
        })
    })
}

module.exports = {
    list,
    imageId,
    createImage,
    read,
    image,
    remove
}