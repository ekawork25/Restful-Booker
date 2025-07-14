const bookingCollection = require('../../collections/booking/create-booking');
const { verifyResponse } = require('../../utilities/verifier');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');

const logger = require('../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});

let res;

describe('test create booking', () => {
    test.each(Object.values(testData))(
        "Test $title ", async ({ title, header, body, expected_result }) => {

            res = await bookingCollection.createBooking(header, body);
            verifyResponse(res, expected_result);
            
        });
});
