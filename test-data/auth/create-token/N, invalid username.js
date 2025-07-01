const path = require('path');
const scriptName = path.basename(__filename).split('.')[0];

const test_data = {
    "title": scriptName,
    "header": {},
    "body":{
        "username" : "abcdef",
        "password" : "password123"
    },
    "expected_result": {
        "status_code": 200,
        "expected_field": "reason",
        "expected_message": "Bad credentials",
        "json_schema":{},
    }
}

module.exports = test_data;
