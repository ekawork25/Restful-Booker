
require('dotenv').config();
//const userId = process.env.USER_ID;


const getBooking = require('../../collections/booking/get-booking-id');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');

const logger = require('../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});

let res;

describe('test get booking', () => {
        test.each(Object.values(testData))(
            "Test $title ", async ({title, header, expected_result }) => {
                console.log('Testing with USER_ID:', process.env.USER_ID);
                res = await getBooking.getBookingById(header, "1");
                
                //logger.logRequest(res);
                // logger.logResponse(res);
                // logger.logExpectation(res);
            

            expect(res.statusCode).toEqual(expected_result.status_code);

            
            });
    
});



