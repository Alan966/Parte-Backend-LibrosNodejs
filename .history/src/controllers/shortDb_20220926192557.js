const  shortDb = require('../models/shortDb')


const getAllListings = (req, res) => {
    shortDb.find({}, (err, result) => {
        if(err)res.json(['There is an error in the request' + err])
        res.status(200).json(result)
    })
}

const createListing = (req, res) => {
    const data = req.body;
    const newListing = new shortDb({
        listing_url: data.listing_url,
        name: data.name,
        summary: data.summary,
        space: data.space,
        description: data.description,
        neighborhood_overview: data.neighborhood_overview,
        notes: data.notes,
        transit: data.transit,
        access:data.access,
        interaction: data.interaction,
        house_rules: data.house_rules,
        property_type: data.property_type,
        room_type: data.room_type,
        bed_type: data.bed_type,
        minimum_nights: data.minimum_nights,
        maximum_nights: data.maximum_nights,
        cancellation_policy: data.cancellation_policy,
        last_scraped: data.last_scraped,
        calendar_last_scraped: data.calendar_last_scraped,
        first_review: data.first_review,
        last_review: data.last_review,
        accommodates: data.accommodates,
        bedrooms: data.bedrooms,
        beds: data.beds,
        number_of_reviews: data.number_of_reviews,
        bathrooms: data.bathrooms,
        amenities: data.amenities,
        price: data.price,
        security_deposit: data.security_deposit,
        cleaning_fee: data.cleaning_fee,
        extra_people: data.extra_people,
        guests_included: data.guests_included,
        images: data.images,
        host: data.host,
        address: data.address,
        availability: data.availability,
        review_scores: data.review_scores,
        reviews: data.reviews
    })

    newListing.save((err, result) => {
        if(err){
            res.status(500).json({
                error: 'There is an error in the request' + err
            })
        }else{
            console.log('Save an Listing')
            res.status(201).json(result)
        }
    })
}

const updateListing= (req, res) => {
    const key = req.params.id
    shortDb.findOneAndUpdate({_id: key}, (err, result ) => {
        if(err){
            res.status(204).json('There is an error in the request' + err)
        }else{
            console.log('Update an Listing')
            res.status(204).send(result)
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