const app = require("../src/index");
const mongoose = require("mongoose");
const request = require("supertest");
const { mongodb } = require("../src/config");
require('dotenv').config()

const password = process.env.PASSWORD

describe('GET /shortDB/all', () => {

    beforeAll(async () => {
        await mongoose.connect(mongodb.url);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    })

    let response;
    beforeEach(async() => {
        response = await request(app).get('/shortDB/all').send();
    })
    it('sould response with a 200 status code', async () => {
        expect(response.status).toBe(200);
        expect(response.headers['Content-Type']).toContain('json');
    })

    it('should response a Array with Objects', async () => {
        expect(response.body).toBeInstanceOf(Array);
    })
})