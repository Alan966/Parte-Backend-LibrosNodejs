const app = require("../src/index");
const mongoose = require("mongoose");
const request = require("supertest");
const { mongodb } = require("../src/config");
require('dotenv').config()
const  shortDb = require('../src/models/shortDb')

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
        const newListing = new shortDb({
            name: data._id,
            listing_url: data.listing_url,
            name: data.name,
            summary: data.summary,
            space: data.space,
            description: data.description,
            neighborhood_overview: data.neighborhood_overview,
            notes: data.notes,
            transit: data.transit,
            access:data.access,
            interaction: data.interaction,
            house_rules: data.house_rules,
            property_type: data.property_type,
            room_type: data.room_type,
            bed_type: data.bed_type,
            minimum_nights: data.minimum_nights,
            maximum_nights: data.maximum_nights,
            cancellation_policy: data.cancellation_policy,
            last_scraped: data.last_scraped,
            calendar_last_scraped: data.calendar_last_scraped,
            first_review: data.first_review,
            last_review: data.last_review,
            accommodates: data.accommodates,
            bedrooms: data.bedrooms,
            beds: data.beds,
            number_of_reviews: data.number_of_reviews,
            bathrooms: data.bathrooms,
            amenities: data.amenities,
            price: data.price,
            security_deposit: data.security_deposit,
            cleaning_fee: data.cleaning_fee,
            extra_people: data.extra_people,
            guests_included: data.guests_included,
            images: data.images,
            host: data.host,
            address: data.address,
            availability: data.availability,
            review_scores: data.review_scores,
            reviews: data.reviews
        })
        let response;
        beforeEach(async() => {
            response = await (await request(app).post('/shortDb/create')).send(newListing);
        })

        test('should response with a 200 status code', async () => {
            expect(response.statusCode).toBe(200);
        })

    })
})
