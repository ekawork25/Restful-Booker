const path = require('path');
const scriptName = path.basename(__filename).split('.')[0];
const schema = require('../../../schema/get-booking-by-id.json');


const test_data = {
    "title": scriptName,
    "header": {},
    "id": ID_GET_BOOKING_VALID,
    "body":{},
    "expected_result": {
        "status_code": STATUS_I_AM_TEAPOT,
        "body": {
            "text": "I'm a Teapot"
        },
        "json_schema": schema.__INVALID__418
    }
}

module.exports = test_data;
