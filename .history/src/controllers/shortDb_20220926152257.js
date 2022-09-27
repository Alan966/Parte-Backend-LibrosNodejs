const  shortDb = require('../models/shortDb')


const getAllListings = (req, res) => {
    shortDb.find({}, (err, result) => {
        if(err)res.json(['There is an error in the request' + err])
        res.status(200).json(result)
    })
}

const createListing = (req, res) => {
    const data = req.body;
    const newListing = new shortDb(data)

    newListing.save((err, result) => {
        if(err){
            res.status(500).json('There is an error in the request' + err)
        }else{
            console.log('Save an Listing')
            res.status(201).json(result)
        }
    })
}

const updateListing= (req, res) => {
    const params = req.params.id
    const data = req.body
    shortDb.findOneAndUpdate({_id: params}, data, (err, result) => {
        if(err){
            res.send('There is an error in the request' + err)
        }else{
            console.log(result)
            res.send(result)
        }
    })
}

const deleteListing  = (req, res) => {
    const key = req.params.id
    shortDb.deleteOne({_id: key}, (err, result) => {
        if(err){
            res.send('There is an error in the request' + err)
        }else{
            console.log('Delete an Listing')
            res.send(result)
        }
    })
}



module.exports = {
    getAllListings,
    createListing,
    updateListing,
    deleteListing
}