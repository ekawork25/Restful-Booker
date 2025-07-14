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
    "id": ID_UPDATE_BOOKING_VALID,
    "body":{
        "firstname": "Mark X",
        "lastname": "Wilson X",
        "totalprice": 700,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2024-08-08",
            "checkout": "2024-12-31"
        },
        "additionalneeds": "Breakfast X"
    },
    "expected_result": {
        "status_code": STATUS_CODE_OK,
        "json_schema":{}
    }
}

module.exports = test_data;
