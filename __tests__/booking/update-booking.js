const bookingCollection = require('../../collections/booking/update-booking');

const postToken = require('../../collections/auth/create-token');
const postTokenData = require('../../test-data/auth/create-token/P, create token successfully');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');

const logger = require('../../utilities/logger');


let testData = require('require-all')({
    dirname: testDataDir
});

let token;

beforeEach(async () => {
    const response = await postToken.createToken(postTokenData.body);
    expect(response.statusCode).toEqual(200);
    token = response.body.token;
  });

describe('test update booking', () => {
    test.each(Object.values(testData))(
        "Test $title ", async ({ title, header, body, id, expected_result }) => {

            if (title.includes('N, update booking with invalid token')){
                header["Cookie"] = 'token=abc123';
            }
            else if(title.includes('N, update booking without cookie in header')){
                header["Cookie"] = null;
            }
            else{
                header["Cookie"] = 'token='+token;
            }
            
            res = await bookingCollection.updateBooking(header, body, id, token);
            expect(res.statusCode).toEqual(expected_result.status_code);
        });
});
