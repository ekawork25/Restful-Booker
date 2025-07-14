const path = require('path');
const scriptName = path.basename(__filename).split('.')[0];
const schema = require('../../../schema/get-all-booking.json');


const test_data = {
    "title": scriptName,
    "header": {
        "Accept": "application/json"
    },
    "param":{
        "firstname": "Abcsds",
        "lastname": "dereddff"
    },
    "expected_result": {
        "status_code": STATUS_CODE_OK,
        "body": {
          },
        "json_schema":schema.__INVALID,
    }
}

module.exports = test_data;
