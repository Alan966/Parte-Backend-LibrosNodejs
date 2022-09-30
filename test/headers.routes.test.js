const app = require("../src/index");
const mongoose = require("mongoose");
const request = require("supertest");
const { mongodb } = require("../src/config");
const Headers = require("../src/models/headersModel");

jest.setTimeout(30000);

describe(" all request of headers",() => {

    beforeAll(async () => {
        await mongoose.connect(mongodb.url);
    });

    afterAll(async() => {
        await mongoose.connection.close();
    })

    describe('GET  /headers/all',() => {

        let response;
        beforeEach(async () => {
            response = await request(app).get('/headers/all').send();
        })

        test('should response with a 200 status code and repsonse with json', async() =>{
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })

    })
})