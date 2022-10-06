const app = require("../src/index");
const mongoose = require('mongoose');
const request = require('supertest');
const { mongodb } = require('../src/config');
const Images = require('../src/models/Imagesmodels');
const path = require('path')
const fs = require('fs');

const jpgImage = fs.readFileSync(path.resolve(__dirname, '../src/images/image.jpg'))
jest.setTimeout(30000)

describe('all images', () => {
    beforeAll(async() =>{
        await mongoose.connect(mongodb.url)
    });

    afterAll(async () => {
        await mongoose.connection.close();
    })

    describe('GET /images/all', () => {

        let response;
        beforeEach(async() => {
            response = await request(app).get('/images/all').send();
        })

        test('should respond with a 200 status code', async () => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })

    })
})