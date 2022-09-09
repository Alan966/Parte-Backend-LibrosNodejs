const password = process.env.PASSWORD
const dotenv = require('dotenv')

module.exports = {
    mongodb:{
        url: `mongodb+srv://jairmartinez:${password}@cluster0.ijhug8t.mongodb.net/?retryWrites=true&w=majority`
    }
}