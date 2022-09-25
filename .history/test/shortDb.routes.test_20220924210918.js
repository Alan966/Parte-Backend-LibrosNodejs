const app = require("../src/index");
const mongoose = require("mongoose");
const request = require("supertest");
const { mongodb } = require("../src/config");
require('dotenv').config()

const password = process.env.PASSWORD
jest.setTimeout(30000)

describe('GET /shortDb/all', () => {
    beforeAll(async () => {
        await mongoose.connect(mongodb.url);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    })
    let response;
    beforeEach(async () => {
        response = await request(app).get('/shortDb/all').send();
    })

    test('should respond with a 200 status code', async () => {
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toContain('json');
    })
    test('should response a Array with Objects', async () => {
        expect(response.body).toBeInstanceOf(Array);
    })
})

// describe('GET /shortDb/create', () => {

//     beforeAll(async () => {
//         await mongoose.connect(mongodb.url);
//     })

//     afterAll(async () => {
//         await mongoose.disconnect();
//     })


// })
