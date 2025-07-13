const getBooking = require('../../collections/booking/get-booking-id');

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
                //logger.logRequest(res);
                // logger.logResponse(res);
                // logger.logExpectation(res);

                expect(res.statusCode).toEqual(expected_result.status_code);

            });
    
});



