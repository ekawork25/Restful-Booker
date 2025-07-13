const path = require('path');
const scriptName = path.basename(__filename).split('.')[0];

const test_data = {
    "title": scriptName,
    "header": {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    "id": 2,
    "body":{},
    "expected_result": {
        "status_code": 200,
        "json_schema":{}
    }
}

module.exports = test_data;
