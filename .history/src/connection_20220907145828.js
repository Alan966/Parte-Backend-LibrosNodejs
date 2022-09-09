const mongoose = require('mongoose')
const  { mongodb } = require('./config')
console.log(mongodb + 'line 3')

const connection = mongoose.connect(mongodb.url)
.then(resp => {
    console.log('connected to database' + resp)
})
.end(err => {
    console.log(' error connecting to database' + err)
})

module.exports = connection