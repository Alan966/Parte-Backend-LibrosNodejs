const password = process.env.PASSWORD
require('dotenv').config()

console.log(password)

module.exports = {
    mongodb:{
        url: `mongodb+srv://jairmartinez:Jairmartinez23@cluster0.ijhug8t.mongodb.net/?retryWrites=true&w=majority`
    }
}