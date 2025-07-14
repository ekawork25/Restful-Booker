
const postToken = require('../../collections/auth/create-token');
const checkHealth = require('../../collections/ping/health-check')

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



