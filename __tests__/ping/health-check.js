const pingCollection = require('../../collections/ping/health-check');

const testDataDir = __filename.split('.js')[0].replace('__tests__', 'test-data');

const logger = require('../../utilities/logger');

let testData = require('require-all')({
    dirname: testDataDir
});

let res;

describe('test create booking', () => {
    test.each(Object.values(testData))(
        "Test $title ", async ({title, header, expected_result}) => {

            res = await pingCollection.healthCheck(header);
            expect(res.statusCode).toEqual(expected_result.status_code);

        });
});
