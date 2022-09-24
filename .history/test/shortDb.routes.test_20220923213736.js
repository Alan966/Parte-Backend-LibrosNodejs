const app = require("../src/index");
const mongoose = require("mongoose");
const request = require("supertest");
const { mongodb } = require("../src/config");
require('dotenv').config()

const password = process.env.PASSWORD

describe('GET /dashboard', () => {

    beforeAll(async () => {
        await mongoose.connect(mongodb.url);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    })

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/dashboard').send();
        expect(response.statusCode).toBe(200);
    })

    test('should response a Array with Objects', async () => {
        let  response = await request(app).get('/dashboard').send();
        expect(response.body).toBeInstanceOf(Array);
    })
})