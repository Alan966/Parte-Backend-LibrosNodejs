const app = require("../src/index");
const request = require("supertest");

describe('GET /', () => {
    test('sould response with a 200 status code', async () => {
        const response = await await request(app).get('/all').send()
        expect(response.statusCode).tobe(200)
    })
})