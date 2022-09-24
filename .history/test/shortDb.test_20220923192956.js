const app = require("../src/index");
const mongoose = require("mongoose");
const request = require("supertest");
const { mongodb } = require("../src/config");
require('dotenv').config()

const password = process.env.PASSWORD

describe('GET /', () => {

    
    beforeAll(async () => {
        await mongoose.connect(`mongodb+srv://jairmartinez:${password}@cluster0.ijhug8t.mongodb.net/?retryWrites=true&w=majorit`);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    })

    test('sould response with a 200 status code', async () => {
        const response = await await request(app).get('/').send()
        expect(response.statusCode).tobe(200)
    })
})