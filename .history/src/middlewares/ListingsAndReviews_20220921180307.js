const ListingsAndReviews = require('../models/listingsAndReviews')


const getAllListings = (req, res) => {
    ListingsAndReviews.find({}, (err, result) => {
        if(err){
            res.send('There is an error in the request' + err)
        }else{
            res.send(result)
        }
    })
}


module.exports = {
    getAllListings
}