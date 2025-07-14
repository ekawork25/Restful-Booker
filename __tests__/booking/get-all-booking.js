
const getBookings = require('../../collections/booking/get-all-booking');
const { verifyResponse, verifyStatusCode } = require('../../utilities/verifier');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');

const logger = require('../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});

let res;

describe('test get booking', () => {
        test.each(Object.values(testData))(
            "Test $title ", async ({title, header, param, body, expected_result }) => {
            
                res = await getBookings.getBooking(param);
                verifyResponse(res, expected_result);
            
            });
    
});



