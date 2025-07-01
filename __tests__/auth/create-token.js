
const postToken = require('../../collections/auth/create-token');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');

const logger = require('../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});

let res;

describe('test create token', () => {
        test.each(Object.values(testData))(
            "Test $title ", async ({title, header, body, expected_result }) => {
                res = await postToken.createToken(body);
                
                // logger.logRequest(res);
                // logger.logResponse(res);
                // logger.logExpectation(res);
            

                expect(res.statusCode).toEqual(expected_result.status_code);
                expect(res.body).toHaveProperty(expected_result.expected_field);
                
                if("reason" in res.body){
                    const actualValue = res.body[expected_result.expected_field];
                    expect(actualValue).toBe(expected_result.expected_message);
                }

            
            });
    
});



