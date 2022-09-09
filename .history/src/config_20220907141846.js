require('dotenv').config()
const { password } = process.env.PASSWORD
console.log(password)

module.exports = {
    mongodb: {
        host: 'localhost',
        user: 'alanjair',
        password:'',

    }
}