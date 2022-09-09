const password = process.env.PASSWORD
// DOTENV
require('dotenv').config()
console.log(password)

module.exports = {
    mongodb:{
        url: `mongodb+srv://jairmartinez:${password}@cluster0.ijhug8t.mongodb.net/?retryWrites=true&w=majority`
    }
}