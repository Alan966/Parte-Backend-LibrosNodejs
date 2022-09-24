const app = require("../src/index");
const mongoose = require("mongoose");
const request = require("supertest");
const { mongodb } = require("../src/config");

describe('GET /', () => {

    beforeAll(async () => {
        await mongoose.connect(mongodb.url);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    })

    test('sould response with a 200 status code', async () => {
        const response = await await request(app).get('/all').send()
        expect(response.statusCode).tobe(200)
    })
})