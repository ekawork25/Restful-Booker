const path = require('path');
const scriptName = path.basename(__filename).split('.')[0];

const test_data = {
    "title": scriptName,
    "header": {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    "body":{
        "username" : __USERNAME__,
        "password" : __PASSWORD__
    },
    "expected_result": {
        "status_code": STATUS_CODE_OK,
        //"expected_field": "token",
        "body": {
            "type": "object",
            "required_fields": ["token"],
            "field_types": {
                "token": "string"
            },
            "field_patterns": {
                "token": "^[a-zA-Z0-9]+$"
            }
        },
        "json_schema":{},
    }
}

module.exports = test_data;
