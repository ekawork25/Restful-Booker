const path = require('path');
const scriptName = path.basename(__filename).split('.')[0];


const test_data = {
    "title": scriptName,
    "header": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Cookie": null,
        "Authorization": "YWRtaW46cGFzc3dvcmQxMjM=]"
    },
    "id": 6,
    "body":{
        "firstname": "Mark X",
        "lastname": "Wilson X"
    },
    "expected_result": {
        "status_code": 200,
        "body": {
            "firstname": "Mark X",
            "lastname": "Wilson X"
        },
        "json_schema":{}
    }
}

module.exports = test_data;
