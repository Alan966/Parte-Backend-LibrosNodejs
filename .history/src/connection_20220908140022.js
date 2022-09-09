const mongoose = require('mongoose')
const { mongodb } = require('./config')

console.log(mongodb.url)

const connection = mongoose.connect(mongodb.url)
.then(resp => {
    console.log('MongoDB connected')
})
.catch(err => {
    console.log('Error connecting to MongoDB' + err)
})

module.exports = connection