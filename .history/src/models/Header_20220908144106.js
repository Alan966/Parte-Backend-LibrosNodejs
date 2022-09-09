const mongoose = require('mongoose')
const Schema = mongoose.Schema

const header = new Schema({
    title: String,
    description: String
})

const Header = mongoose.model('Header', header)
module.exports = Header
