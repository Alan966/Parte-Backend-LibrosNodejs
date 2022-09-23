const ListingsAndReviews = require('../models/listingsAndReviews')


const getListings = (req, res) =>{
    ListingsAndReviews.find({}, (err, result) => {
        if(err){
            console.log('Ha ocurrido un error al obtener los datos')
        }else{
            res.send(result)
        }
    })
}

module.exports = {
    getListings
}