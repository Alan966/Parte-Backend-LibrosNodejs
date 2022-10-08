const app = require('../src/index');
const mongoose = require('mongoose');
const request = require('supertest');
const { mongodb } = require('../src/config');
const path = require('path');
const fs = require('fs');
const Images = require('../src/models/Imagesmodels');

const jpgImage = fs.readFileSync(path.resolve(__dirname, '../src/images/image.jpg'));

describe('all images', () => {

    beforeAll(async() => {
        await mongoose.connect(mongodb.url)
    })

    afterAll(async() => {
        await mongoose.connection.close();
    })

    describe('GET /images/all', () => {

        let response;
        beforeEach(async()=>{
            response = await request(app).get('/images/all').send();
        })

        test('should response with a 200 status code', async () => {
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })

        test('should response a Array with Objects', async () => {
            expect(response.body).toBeInstanceOf(Array);
        });
    })

    describe('POST /images/create', () => {

        const image = {
            name: "Casas domo",
            headers: "633e1302a9a77c37036207ba",
            image: jpgImage
        }
        const imageWrong = {
            name: "Casas domo",
            headers: "123456789",
            image: jpgImage
        }

        let response;
        beforeEach(async()=> {
            response = await request(app).post('/images/create').send(image).type('form');
        })

        afterEach(async() => {
            await Images.deleteMany({name: "Casas domo"});
        })

        test('should response with a 200 status code', async () => {
            expect(response.statusCode).toBe(200);
        })

        test('should response with content type json ', async () => {
            expect(response.headers['content-type']).toContain('json');
        })

        test('should response with a Object', async () => {
            expect(response.body).toBeInstanceOf(Object);
        })

        test('should response with a Object with a property name', async () => {
            expect(response.body).toHaveProperty('name');
        })

        test('should response with wrong data', async () => {
            response = await request(app).post('/images/create').send(imageWrong).type('form');
            expect(response.statusCode).toBe(400);
            expect(response.body.error).toBeDefined();
        });
    })

    describe('GET /images/:imageId', () => {

        let id = '634072dcb738e49a6b6aecff';
        let response;
        beforeEach(async() => {
            response = await request(app).get(`/images/${id}`).send();
        })

        test('should response with a 200 status code', async() => {
            expect(response.statusCode).toBe(200);
        })
    })

    describe('GET /images/image/:imageId', () => {

        let id = '634072dcb738e49a6b6aecff';
        let response;
        beforeEach(async() => {
            response = await request(app).get(`/images/image/${id}`).send();
        })

        test('should response with a 200 status code', async() => {
            expect(response.statusCode).toBe(200);
        })

        test('should response witha content type image', async () => {
            expect(response.headers['content-type']).toContain('image');
        });

        test('should response with a image', async () => {
            expect(response.body).toBeInstanceOf(Buffer);
        })

        test('should response with a 404 status code', async () => {
            response = await request(app).get('/images/image/1234')
            expect(response.statusCode).toBe(400);
        })
    })

    describe('DELETE /images/:imageId', () => {

        let data = {
            name: "Casas domo",
            headers: "633e1302a9a77c37036207ba",
            image: jpgImage
        }
        let response;
        let id;
        beforeEach(async()=> {
            id = await request(app).post('/images/create').send(data).type('form');
            response = await request(app).delete(`/images/${id.body._id}`).send();
        })

        test('should response with a 200 status code', async() => {
            expect(response.statusCode).toBe(200);
        })

        test('should response with a json content content-type ', async () => {
            expect(response.headers['content-type']).toContain('json');
        })

        test('should response with a correct message', async () => {
            const findImage = await Images.findById(id.body._id);
            expect(findImage).toBeNull();
        })
    })
})