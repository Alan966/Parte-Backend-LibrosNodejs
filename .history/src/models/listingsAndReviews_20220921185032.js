const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listingsAndReviewsSchema = new Schema({
    _id:{
        type:String,
        require:true,
        trim:true,
        maxlength:8,
        unique:true
    },
    listing_url:{
        type:String,
        trim:true,
        maxlength:38,
        require:true,
        unique:true
    },
    name:{
        type: String,
        trim: true,
        maxLength:100,
        require:true,
        unique:true
    },
    summary:{
        type: String,
        trim: true,
        maxLength:1000,
        require:true,
        unique:true
    },
    space:{
        type: String,
        trim: true,
        maxLength:1000,
        require: true,
        unique:true
    },
    description:{
        type: String,
        trim: true,
        maxLength: 1000,
        require: true,
        unique:true
    },
    neighborhood_overview:{
        type: String,
        trim: true,
        maxLength: 1000,
        require: true,
        unique:true
    },
    notes:{
        type: String,
        trim: true,
        maxLength: 1000,
        require: true,
        unique: true
    },
    transit:{
        type: String,
        trim: true,
        maxLength: 1000,
        require: true,
        unique: true
    },
    access:{
        type: String,
        trim: true,
        maxLength:1000,
        require: true,
        unique:true
    },
    interaction:{
        type: String,
        trim: true,
        maxLength: 1000,
        require: true,
        unique: true
    },
    house_rules:{
        type: String,
        trim: true,
        maxLength: 1000,
        require: true,
        unique: true
    },
    property_type:{
        type: String,
        trim: true,
        maxLength:20,
        require:true,
        unique:true
    },
    room_type:{
        type: String,
        trim: true,
        maxLength:30,
        require: true,
    },
    bed_type:{
        type: String,
        trim: true,
        maxLength: 30,
        require: true
    },
    minimum_nights:{
        type: String,
        trim: true,
        maxLength: 5,
        require: true
    },
    maximum_nights:{
        type: String,
        trim: true,
        maxLength: 5,
        require: true
    },
    cancellation_policy:{
        type: String,
        trim: true,
        maxLength: 30,
        require: true
    },
    last_scraped:{
        type: Date,
        trim: true,
        maxLength:200,
        require: true
    },
    calendar_last_scraped:{
        type: Date,
        trim: true,
        maxLength:200,
        require: true
    },
    first_review:{
        type: Date,
        trim: true,
        maxLength:200,
        require: true
    },
    last_review:{
        type: Date,
        trim: true,
        maxLength:200,
        require:true
    },
    accommodates:{
        type: Number,
        trim: true,
        maxLength: 5,
        require: true
    },
    bedrooms:{
        type: Number,
        trim: true,
        maxLength:5,
        require:true
    },
    beds:{
        type: Number,
        trim: true,
        maxLength:5,
        require: true
    },
    number_of_reviews:{
        type: Number,
        trim: true,
        maxLength:5,
        require: true
    },
    bathrooms:{
        type: Number,
        trim: true,
        maxLength:5,
    },
    amenities:{
        type: Array,
        default:[]
    },
    price:{
        type: Number,
        trim: true,
        maxLength: 5,
        require: true
    },
    security_deposit:{
        type: Number,
        trim: true,
        maxLength: 7,
        require: true
    },
    cleaning_fee:{
        type: Number,
        trim: true,
        maxLength: 7,
        require: true
    },
    extra_people:{
        type: Number,
        trim: true,
        maxLength: 7,
        require: true
    },
    guests_included:{
        type: Number,
        trim: true,
        maxLength: 5,
        require: true
    },
    images:{
        type: Object,
        trim: true,
        maxLength: 1000,
        require: true
    },
    host:{
        type: Object,
        trim: true,
        maxLength: 1000,
        require: true
    },
    address:{
        type: Object,
        trim: true,
        maxLength:1000,
        require: true
    },
    availability:{
        type: Object,
        trim: true,
        maxLength: 1000,
        require:true
    },
    review_scores:{
        type: Object,
        trim: true,
        maxLength: 1000,
        require: true
    },
    reviews:{
        type: Array,
        trim: true,
        maxLength: 1000,
        require: true
    },
    timestamps:{
        createdAt: new Date(0),
        updateAd: new Date(0)
    }
})

const ListingsAndReviews = mongoose.model('ListingsAndReviews', listingsAndReviewsSchema)
module.exports = ListingsAndReviews