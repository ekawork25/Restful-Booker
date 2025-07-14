const path = require('path');
const scriptName = path.basename(__filename).split('.')[0];

const test_data = {
    "title": scriptName,
    "header": {},
    "body":{
        "username" : "",
        "password" : ""
    },
    "expected_result": {
        "status_code": STATUS_CODE_OK,
        "body": {
            "reason": "Bad credentials"
        },
        "json_schema":{},
    }
}

module.exports = test_data;
