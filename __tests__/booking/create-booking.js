const bookingCollection = require('../../collections/booking/create-booking');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');

const logger = require('../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});

let res;

describe('test create booking', () => {
    test.each(Object.values(testData))(
        "Test $title ", async ({ title, header, body, expected_result }) => {

           // console.log("Check BODY: ", body);
            res = await bookingCollection.createBooking(header, body);
            expect(res.statusCode).toEqual(expected_result.status_code);
            expect(res.body).toMatchObject(expected_result.body)

        });
});
