const Headers = require("../models/headersModel");


const getHeaders = (req, res) => {
    Headers.find({}, (err, result) => {
        if(err) res.json({error: 'There is an error in the request' + err})
        res.status(200).json(result)
    })
}

const createHeaders = (req, res) => {
    const data = req.body;
    const headers = new Headers({
        name: data.name
    });
    headers.save((err, result) => {
        if(err) {res.status(500).json({
            error: 'There is an error in the request'+ err
        })}else{
        res.status(201).json(result)
        }
    })
}


const updateHeaders = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    Headers.findByIdAndUpdate(id, data, {new: true}, (err, result) =>{
        if(err) res.json({error : 'There is an error in the request'})
        res.json(result)
    })
}

const deleteHeaders = (req, res) => {
    const id = req.params.id;

    Headers.findOneAndDelete({_id: id}, (err, result) =>{
        if(err) res.json({
            error: 'There is an error in the request'+ err
        })
        res.json(result)
    })
}

module.exports = {
    getHeaders,
    createHeaders,
    updateHeaders,
    deleteHeaders
}