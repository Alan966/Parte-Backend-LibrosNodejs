const password = process.env.PASSWORD
// DOTENV
const dotenv = require('dotenv')

console.log(password)

module.exports = {
    mongodb:{
        url: `mongodb+srv://jairmartinez:${password}@cluster0.ijhug8t.mongodb.net/?retryWrites=true&w=majority`
    }
}