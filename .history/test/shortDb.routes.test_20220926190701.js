const app = require("../src/index");
const mongoose = require("mongoose");
const request = require("supertest");
const { mongodb } = require("../src/config");
require('dotenv').config()
const shortDb = require("../src/models/shortDb");

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

describe('POST /shortDb/create', () => {

    beforeAll(async () => {
        await mongoose.connect(mongodb.url);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    })

    describe('given a valid reques', () => {
        const data = {
            listing_url:"https://cdn-images.farfetch-contents.com/15/45/41/10/15454110_28385859_1000.jpg",
            name:"queOvole",
            summary:"Algo Rico",
            space:"There is the most expensive",
            description:"I don't saw what push",
            neighborhood_overview:"tenis si the first or the second night",
            notes:"metele",
            transit:"mete duro metele durof",
            access:"you don't need don't need there , there is debitf card bro",
            interaction:"Nostros with necesditamos nada",
            house_rules:"wich is fall most dexpensive car",
            property_type:"Shaving the roles",
            room_type:"United states",
            bed_type:"enproitment",
            minimum_nights:"4",
            maximum_nights:"4",
            cancellation_policy:"bro you need more inversting",
            last_scraped:"2019-02-16T05:00:00.000+00:00",
            calendar_last_scraped:"2019-02-16T05:00:00.000+00:00",
            first_review:"2016-01-03T05:00:00.000+00:00",
            last_review:"2019-01-20T05:00:00.000+00:00",
            accommodates:9,
            bedrooms:"7",
            beds:5,
            number_of_reviews:73,
            bathrooms:3.0,
            amenities:[{"0":"TV"},{"1":"Cable TV"},{"2":"Wifi"},{"3":"Kitchen"},{"4":"Paid parking off promises"},{"5":"Smoking allowed"}],
            price:80.00,
            security_deposit:200.00,
            cleaning_fee:40.00,
            extra_people:15.00,
            guests_included:8,
            Images:{"thumbnail_url":"", "medium_url":"", "picture_url":"https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"},
            host:{"host_id":"51399391", "host_url":"https://www.airbnb.com/users/show/51399391", "host_name":"Ana&Gonçalo", "host_location": "Porto, Porto District, Portugal", "host_about": "Gostamos de passear, de viajar, de conhecer pessoas e locais novos, gostamos de desporto e animais! Vivemos na cidade mais linda do mundo!!!", "host_response_time": "within an hour"},
            address:{"street":"Porto, Porto, Portugal", "suburb":"", "government_area":"Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória", "market":"Porto", "country":"Portugal", "country_code":"PT"},
            availability:{"availability_30":"28", "availability_60":"47", "availability_90": "74", "availability_365": "239"},
            review_scores:[{"_id": "58663741", "date":"2016-01-03T05:00:00.000+00:00", "listing_id":"10006546", "reviewer_id":"51483096", "reviewer_name":"Cátia"}, {"_id": "62413197", "date": "2016-02-14T05:00:00.000+00:00", "listing_id":"10006546" }, {"_id": "68310569", "date":"2016-04-04T04:00:00.000+00:00", "listing_id":"10006546", "reviewer_id":"53859850", "reviewer_name":"Bart"}, {"_id": "69693942", "date":"2016-04-12T04:00:00.000+00:00", "listing_id":"10006546", "reviewer_id": "3135623", "reviewer_name":"Alex"}, {"_id": "71451096", "date":"2016-04-25T04:00:00.000+00:00", "listing_id":"10006546", "reviewer_id":"13187858", "reviewer_name":"Dan"}, {"_id":"73191268", "date":"2016-05-07T04:00:00.000+00:00", "listing_id":"10006546", "reviewer_id":"61434690", "reviewer_name":"Anne", "comments":"THE PLACE TO BE, l'appartement est situé au milieu de la Ribeira , tout peut se faire à pieds c'est l'ideal,l'appartement est très bien agencé et équipé"}]
        }

        const wrongData = {
            nombre:"queOvo",
            summary:"Algo Rico",
        }
        afterEach(async () => {
            await shortDb.deleteMany({name:"queOvole"});
        })

        let response;
        beforeEach(async () => {
            response = await request(app).post('/shortDb/create').send(data);
        })
        test('should response with a 200 status code', async () => {
            expect(response.statusCode).toBe(201);
        })

        test('should have a content-type application/json in header', async () => {
            expect(response.headers['content-type'])
                .toEqual(expect.stringContaining('json'));
        })

        test('should response with a new Object',async () => {
            expect(response.body._id).toBeDefined();
            expect(response.body.name).toBe(data.name);
        } )

        test('Error en la insercion', async () => {
            const response = await request(app).post('/shortDb/create').send(wrongData);
            expect(response.statusCode).toBe(500);
            expect(response.body.error).toBeDefined();
        })
    })
})

describe('PUT /shortDb/update/:id', () => {

    beforeAll(async () => {
        await mongoose.connect(mongodb.url);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    })

    let shortOne;
    beforeEach(async() => {
        shortOne = await shortDb.create({
            listing_url:"https://cdn-images.farfetch-contents.com/15/45/41/10/15454110_28385859_1000.jpg",
            name:"queOvole",
            summary:"Algo Rico",
            space:"There is the most expensive",
            description:"I don't saw what push",
            neighborhood_overview:"tenis si the first or the second night",
            notes:"metele",
            transit:"mete duro metele durof",
            access:"you don't need don't need there , there is debitf card bro",
            interaction:"Nostros with necesditamos nada",
            house_rules:"wich is fall most dexpensive car",
            property_type:"Shaving the roles",
            room_type:"United states",
            bed_type:"enproitment",
            minimum_nights:"4",
            maximum_nights:"4",
            cancellation_policy:"bro you need more inversting",
            last_scraped:"2019-02-16T05:00:00.000+00:00",
            calendar_last_scraped:"2019-02-16T05:00:00.000+00:00",
            first_review:"2016-01-03T05:00:00.000+00:00",
            last_review:"2019-01-20T05:00:00.000+00:00",
            accommodates:9,
            bedrooms:"7",
            beds:5,
            number_of_reviews:73,
            bathrooms:3.0,
            amenities:[{"0":"TV"},{"1":"Cable TV"},{"2":"Wifi"},{"3":"Kitchen"},{"4":"Paid parking off promises"},{"5":"Smoking allowed"}],
            price:80.00,
            security_deposit:200.00,
            cleaning_fee:40.00,
            extra_people:15.00,
            guests_included:8,
            Images:{"thumbnail_url":"", "medium_url":"", "picture_url":"https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"},
            host:{"host_id":"51399391", "host_url":"https://www.airbnb.com/users/show/51399391", "host_name":"Ana&Gonçalo", "host_location": "Porto, Porto District, Portugal", "host_about": "Gostamos de passear, de viajar, de conhecer pessoas e locais novos, gostamos de desporto e animais! Vivemos na cidade mais linda do mundo!!!", "host_response_time": "within an hour"},
            address:{"street":"Porto, Porto, Portugal", "suburb":"", "government_area":"Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória", "market":"Porto", "country":"Portugal", "country_code":"PT"},
            availability:{"availability_30":"28", "availability_60":"47", "availability_90": "74", "availability_365": "239"},
            review_scores:[{"_id": "58663741", "date":"2016-01-03T05:00:00.000+00:00", "listing_id":"10006546", "reviewer_id":"51483096", "reviewer_name":"Cátia"}, {"_id": "62413197", "date": "2016-02-14T05:00:00.000+00:00", "listing_id":"10006546" }, {"_id": "68310569", "date":"2016-04-04T04:00:00.000+00:00", "listing_id":"10006546", "reviewer_id":"53859850", "reviewer_name":"Bart"}, {"_id": "69693942", "date":"2016-04-12T04:00:00.000+00:00", "listing_id":"10006546", "reviewer_id": "3135623", "reviewer_name":"Alex"}, {"_id": "71451096", "date":"2016-04-25T04:00:00.000+00:00", "listing_id":"10006546", "reviewer_id":"13187858", "reviewer_name":"Dan"}, {"_id":"73191268", "date":"2016-05-07T04:00:00.000+00:00", "listing_id":"10006546", "reviewer_id":"61434690", "reviewer_name":"Anne", "comments":"THE PLACE TO BE, l'appartement est situé au milieu de la Ribeira , tout peut se faire à pieds c'est l'ideal,l'appartement est très bien agencé et équipé"}]
        });
    })

    afterEach(async() => {
        await shortDb.findByIdAndDelete(shortOne._id, (err,doc) => {
            if(err) console.log(err);
        });
    })

    test('Should response with a 200 statusCode', async () => {
        const response = await request(app).put(`/shortDb/update/${shortOne._id}`).send({
            name:"Usame por favor"
        });
        expect(response.statusCode).toBe(204);
        expect(response.headers['content-type']).toContain('json')
    });
});