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

        test('should response a Array with Objects',async () => {
            expect(response.body).toBeInstanceOf(Array)
        });
    })

    describe('POST /headers/create', () => {
        describe('given a valid reques', () => {
            const data = {
                name: "playa"
            }

            const wrongData = {
                nombre: "beach"
            }

            afterEach(async () => {
                await Headers.deleteOne({name:"playa"});
            })
            let response;
            beforeEach(async () => {
                response = await request(app).post('/headers/create').send(data);
            });

            test('should response with a 200 status code', async () => {
                expect(response.statusCode).toBe(201);
            })

            test('should response with a new Object', async () => {
                expect(response.headers['content-type']).toEqual(
                    expect.stringContaining('json'));
            });

            test('should response with a new Object', async () => {
                expect(response.body._id).toBeDefined();
                expect(response.body.name).toBe(data.name);
            });

            test('Error with the insection of the data', async () => {
                const response = await request(app).post('/headers/create').send(wrongData);
                expect(response.statusCode).toBe(500);
                expect(response.body.error).toBeDefined();
            })
        })
    })

    describe('PUT /headers/update/:id', () => {

        let newData;
        beforeEach(async () => {
            newData = await Headers.create({
                name: "playa",
            })
        })

        afterEach(async() => {
            await Headers.findByIdAndDelete(newData._id, (err, doc) => {
                if(err) console.log(err);
            }).clone().catch(err => console.log(err));
        })

        test('Should response with a 200 statusCode', async() => {
            const response = await request(app).put(`/headers/update/${newData._id}`).send({
                name: "beach"
            });
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })

        test('Se actualiza correctamente', async () => {
            const response = await request(app).put(`/headers/update/${newData._id}`).send({
                name: "beach"
            });

            expect(response.body._id).toBeDefined();
            expect(response.body.name).toBe("beach");
        });
    })

    describe('DELETE /headers/delete/:id', () => {

        let newData;
        beforeEach(async() => {
            newData = await Headers.create({
                name: "playa"
            });
        });

        test('should response with a 200 status code',async () => {
            const response = await request(app).delete(`/headers/delete/${newData._id}`).send();
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        test('it should delete the data', async () => {
            const response = await request(app).delete(`/headers/delete/${newData._id}`).send();
            expect(response.body._id).toBeDefined();

            const foundHeader = await Headers.findById(newData._id)
            expect(foundHeader).toBeNull();
        });
    });
})