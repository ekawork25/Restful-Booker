
const getBookings = require('../../collections/booking/get-all-booking');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');

const logger = require('../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});

let res;

describe('test get booking', () => {
        test.each(Object.values(testData))(
            "Test $title ", async ({title, header, body, expected_result }) => {
                res = await getBookings.getBooking();
                
                // logger.logRequest(res);
                // logger.logResponse(res);
                // logger.logExpectation(res);
            

                expect(res.statusCode).toEqual(expected_result.status_code);
                res.body.forEach(item => {
                    expect(item).toHaveProperty(expected_result.expected_field);
                });
            
            });
    
});



