const path = require('path');
const scriptName = path.basename(__filename).split('.')[0];

const test_data = {
    "title": scriptName,
    "header": {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    "body":{
        "username" : "admin",
        "password" : "password123"
    },
    "expected_result": {
        "status_code": 200,
        "expected_field": "token",
        "json_schema":{},
    }
}

module.exports = test_data;
