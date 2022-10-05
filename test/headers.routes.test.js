const app = require("../src/index");
const mongoose = require('mongoose');
const request = require('supertest');
const { mongodb } = require('../src/config');
const Headers = require('../src/models/HeadersModels');
const path = require('path')
const fs = require('fs')

const jpgImage = fs.readFileSync(path.resolve(__dirname, '../src/images/image.jpg'))
jest.setTimeout(30000)

describe('all headers', () => {
    beforeAll(async () => {
        await mongoose.connect(mongodb.url)
    });

    afterAll(async () => {
        await mongoose.connection.close();
    })

    describe('GET /headers/all', () => {

        let response;
    beforeEach(async() => {
        response = await request(app).get('/headers/all').send();
    })

    test('should respond with a 200 status code', async () => {
        expect(response.statusCode).toBe(200);
        expect(response.headers['content-type']).toContain('json');
    })

    test('should response a Array with Objects', async () => {
        expect(response.body).toBeInstanceOf(Array);
    });
    })

    describe('POST /headers/create', () => {

        describe('given a valid reques', () => {

            const html = {
                name: "test",
                image: jpgImage
            }

            const htmlWrong = {
                nombre: "test",
                image: "jpgImage"
            }
            afterEach(async () => {
                await Headers.deleteMany({name :"test"});
            })

            let response;
            beforeEach(async() => {
                response = await request(app).post('/headers/create').send(html).type('form');
            })
            test('should response with a 200 status code', async () => {
                expect(response.statusCode).toBe(200);
            })

            test('should have a content-type application/json in header', async() => {
                expect(response.headers['content-type'])
                .toEqual(expect.stringContaining('json'));
            })

            test('should response with a new Object', async () => {
                expect(response.body._id).toBeDefined();
                expect(response.body.name).toBe(html.name)
            })

            test('shoudl response with a Error', async () => {
                const response = await request(app).post('/headers/create').send(htmlWrong).type('form');
                expect(response.statusCode).toBe(500);
                expect(response.body.error).toBeDefined();
            })
        })

    })
})