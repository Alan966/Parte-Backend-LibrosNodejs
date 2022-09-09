const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HeaderSchema = new Schema({
    title: String,
    description: String
})

const Header = mongoose.model('Header', HeaderSchema)
module.exports = Header
