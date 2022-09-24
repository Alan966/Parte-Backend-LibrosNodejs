const shortDb = require("../src/routes/shortDb");
const request = require("supertest");

describe('Get /all', () => {
    test('should repsonse with a 200 status code', async () => {
        const response = await await request(shortDb).get('/all').send()
        expect(response.statusCode).tobe(200)
    })
})