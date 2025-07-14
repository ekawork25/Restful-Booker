📘 Restful - Booker API Automation
This repository contains automated tests for the Restful - Booker API using Jest.

These tests are designed to validate REST API endpoints such as authentication, booking creation, retrieving,  updating, and deletion.

Getting Started
1. Clone the Repository

    Git clone https://github.com/ekawork25/Restful-Booker.git

    Go to folder (example: cd restful-booker)
   
3. Install dependencies
   
   npm install
   
4. Configure variables (Global Variables)
   
   Should configure value for some variables to avoid error when running the test (ID_DELETE_BOOKING_SUCCESS, ID_UPDATE_BOOKING_VALID, ID_PARTIAL_BOOKING_VALID, ID_GET_BOOKING_VALID, BODY_GET_BOOKING_BY_ID). Variable BODY_GET_BOOKING_BY_ID should be in accordance with the ID_GET_BOOKING_VALID.
   
5. Running the Tests
   
   To run all test : npm test
   
   To run specific test: npm test __tests__/{folder_name}/{test_name} (example: __tests__/auth/create_token.js)
   
6. Example Test
                                               
                  const logger = require('../../utilities/logger');
                  let testData = require('require-all')({
                      dirname: testDataDir
                  });
                  
                  let res;
                  
                  describe('test create token', () => {
                          test.each(Object.values(testData))(
                              "Test $title ", async ({title, header, body, expected_result }) => {
                                  res = await postToken.createToken(body);
                  
                    if ('token' in res.body) {
                        expect(typeof res.body.token).toBe('string');
                        expect(res.body.token).toMatch(/^[a-zA-Z0-9]+$/); // validasi format token
                      } else if ('reason' in res.body) {
                        expect(res.body.reason).toBe('Bad credentials');
                      } else {
                        throw new Error('Unexpected response structure');
                      }
                    });
        
                  });

7. Report

   <img width="2880" height="2257" alt="image" src="https://github.com/user-attachments/assets/c04c4149-54e3-4f6e-a003-21aa53ff9b0a" />

   



