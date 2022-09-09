const mongoose = require('mongoose')
const  { mongodb } = require('./config')
console.log(mongodb.url)

const connection = mongoose.connect(mongodb.url)
.then(resp => {
    console.log('connected to database')
})
.catch(err => {
    console.log(' error connecting to database' + err)
})

module.exports = connection