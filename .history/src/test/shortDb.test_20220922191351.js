const request = require('supertest');
const index = require('../index');

describe('GET short', () => {
    it('Debe devolver un codigo de estado 200', (done) => {
        request(index)
        .get('/all')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })

    it('Debe devolver el listado de apartments', (done) => {
        request(index)
        .get('/all')
        .expect('Content-Type', /json/)
        .expect('"Listado de apartamentos"', done)
    })
})

describe('Create short',() => {
    it('Debe devolver el mensaje: Save an Listing', (done) =>{
        const newListing = {
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
        request(index)
        .post('/create')
        .send(newListing)
        .expect('Content-Type', /json/)
        .expect("Save an Listing", done)
    })

    it('Debe devolver el codigo de estado 500', (done) => {
        const newListing ={
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
        request(index)
        .post('/create')
        .send(newListing)
        .expect('Content-Type', /json/)
        .expect(500)
        .expect("Error al guardar el apartamento")
        .end(done)
    })
})