
// DOTENV
require('dotenv').config()
const password = process.env.PASSWORD
console.log(password)

module.exports = {
    mongodb:{
        url: `mongodb+srv://jairmartinez:${password}@cluster0.ijhug8t.mongodb.net/?retryWrites=true&w=majority`
    }
}