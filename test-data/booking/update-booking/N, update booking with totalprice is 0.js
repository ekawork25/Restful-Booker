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
        "firstname": "Mark Updt",
        "lastname": "Wilson Updt",
        "totalprice": 0,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2024-06-09",
            "checkout": "2024-11-31"
        },
        "additionalneeds": "Breakfast Updt"
    },
    "expected_result": {
        "status_code": 200,
        "json_schema":{}
    }
}

module.exports = test_data;
