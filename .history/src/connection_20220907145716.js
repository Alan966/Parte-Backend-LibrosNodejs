const mongoose = require('mongoose')
const  { mongodb } = require('./config')

const connection = mongoose.connect(mongodb)
.then(resp => {
    console.log('connected to database' + resp)
})
.end(err => {
    console.log(' error connecting to database' + err)
})

module.exports = connection