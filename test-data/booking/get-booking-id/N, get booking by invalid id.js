const path = require('path');
const scriptName = path.basename(__filename).split('.')[0];
const schema = require('../../../schema/get-booking-by-id.json');


const test_data = {
    "title": scriptName,
    "header": {
        "Accept": "application/json"
    },
    "id": ID_GET_BOOKING_INVALID,
    "body":{},
    "expected_result": {
        "status_code": STATUS_CODE_NOT_FOUND,
        "body": {
            "text": "Not found"
        },
        "json_schema": schema.__INVALID__404
    }
}

module.exports = test_data;
