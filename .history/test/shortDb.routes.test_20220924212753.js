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

describe('GET /shortDb/create', () => {

    beforeAll(async () => {
        await mongoose.connect(mongodb.url);
    })

    afterAll(async () => {
        await mongoose.disconnect();
    })

    describe('given a valid reques', () => {
        const data = {
            "_id":"62206546",
            "listing_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShHvW4pCB3DBcFk5z9AFeF8RX9-n47-wEjaQ0ZGlVk4y863Cn_581vvt00eIEucFUzFVI&usqp=CAU",
            "name":"Spacious and well located apartament fake",
            "summary":"This is a fantastic inversion for you",
            "space":"The space is the most bigger on the city is very tall and is better",
            "description":"the description is the most important when you write your information about with house",
            "neighborhod_overview":"The overiview of the river you can find several restaurant as",
            "notes":"The most notes about this notes don't but is the best apatment",
            "transit":"transport for the apartment is the best with the block ",
            "access":"The house is find the most interesting about the transit",
            "interaction":"Cost -10 e night god 7.5",
            "house_rules":"Make the house your home bitch ",
            "property_type":"Casita",
            "room_type":"Entire home/apt",
            "bed_type":"Real Bedium",
            "minimum_nights":"3",
            "maximum_nights":"25",
            "cancellation_policy":"new moderate with",
            "last_scraped":"2019-02-16T05:00:00.000+00:00",
            "calendar_last_scraped":"2019-02-16T05:00:00.000+00:00",
            "first_review":"2016-01-03T05:00:00.000+00:00",
            "last_review":"2019-01-20T05:00:00.000+00:00",
            "accommodates":9,
            "bedrooms":"7",
            "beds":5,
            "number_of_reviews":73,
            "bathrooms":3.0,
            "amenities":[{"0":"TV"},{"1":"Cable TV"},{"2":"Wifi"},{"3":"Kitchen"},{"4":"Paid parking off promises"},{"5":"Smoking allowed"}],
            "price":80.00,
            "security_deposit":200.00,
            "cleaning_fee":40.00,
            "extra_people":15.00,
            "guests_included":8,
            "Images":{"thumbnail_url":"", "medium_url":"", "picture_url":"https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"},
            "host":{"host_id":"51399391", "host_url":"https://www.airbnb.com/users/show/51399391", "host_name":"Ana&Gonçalo", "host_location": "Porto, Porto District, Portugal", "host_about": "Gostamos de passear, de viajar, de conhecer pessoas e locais novos, gostamos de desporto e animais! Vivemos na cidade mais linda do mundo!!!", "host_response_time": "within an hour"},
            "address":{"street":"Porto, Porto, Portugal", "suburb":"", "government_area":"Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória", "market":"Porto", "country":"Portugal", "country_code":"PT"},
            "availability":{"availability_30":"28", "availability_60":"47", "availability_90": "74", "availability_365": "239"},
            "review_scores":[{"_id": "58663741", "date":"2016-01-03T05:00:00.000+00:00", "listing_id":"10006546", "reviewer_id":"51483096", "reviewer_name":"Cátia"}, {"_id": "62413197", "date": "2016-02-14T05:00:00.000+00:00", "listing_id":"10006546" }, {"_id": "68310569", "date":"2016-04-04T04:00:00.000+00:00", "listing_id":"10006546", "reviewer_id":"53859850", "reviewer_name":"Bart"}, {"_id": "69693942", "date":"2016-04-12T04:00:00.000+00:00", "listing_id":"10006546", "reviewer_id": "3135623", "reviewer_name":"Alex"}, {"_id": "71451096", "date":"2016-04-25T04:00:00.000+00:00", "listing_id":"10006546", "reviewer_id":"13187858", "reviewer_name":"Dan"}, {"_id":"73191268", "date":"2016-05-07T04:00:00.000+00:00", "listing_id":"10006546", "reviewer_id":"61434690", "reviewer_name":"Anne", "comments":"THE PLACE TO BE, l'appartement est situé au milieu de la Ribeira , tout peut se faire à pieds c'est l'ideal,l'appartement est très bien agencé et équipé"}]
        }
        let response;
        beforeEach(async() => {
            response = await (await request(app).post('/shortDb/create')).send(newListing);
        })

        test('should response with a 200 status code', async () => {
            expect(response.statusCode).toBe(200);
        })

    })
})
