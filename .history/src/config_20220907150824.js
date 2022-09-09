require('dotenv').config()
const password = process.env.PASSWORD

module.exports = {
    mongodb: {
        url: `mongodb+srv://jairmartinez:jairmartinez@cluster0.ijhug8t.mongodb.net/?retryWrites=true&w=majority`
    }
}

