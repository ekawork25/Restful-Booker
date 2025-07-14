const path = require('path');
const scriptName = path.basename(__filename).split('.')[0];

const test_data = {
    "title": scriptName,
    "header": {
        "Accept": "application/json"
    },
    "params":{
        "checkin": "2017-10-17",
        "checkout": "2022-08-30"
    },
    "expected_result": {
        "status_code": STATUS_CODE_OK,
        "expected_field": "bookingid",
        "json_schema":{},
    }
}

module.exports = test_data;
