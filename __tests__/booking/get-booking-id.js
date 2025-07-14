const getBooking = require('../../collections/booking/get-booking-id');
const { verifyResponse } = require('../../utilities/verifier');
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');

const logger = require('../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});

let res;

describe('test get booking by id', () => {
        test.each(Object.values(testData))(
            "Test $title ", async ({title, header, id, expected_result}) => {

                res = await getBooking.getBookingId(header, id);
                verifyResponse(res, expected_result);
        
            });
    
});



