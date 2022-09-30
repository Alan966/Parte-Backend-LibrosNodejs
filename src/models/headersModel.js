const mongoose = require("mongoose")
const Schema = mongoose.Schema

const heanderSchema = new Schema({
    name:{
        type:String,
        trim:true,
        require: true,
        maxLength: 100,
    },
    timestamps:{
        type: Date,
        default: Date.now,
    }
},{ collection: "headers"})

const headersModels = mongoose.model("Headers", heanderSchema)
module.exports = headersModels;