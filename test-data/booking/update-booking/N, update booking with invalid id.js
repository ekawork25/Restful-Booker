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
    "id": ID_UPDATE_BOOKING_INVALID,
    "body":{
        "firstname": "Mark Update",
        "lastname": "Wilson Update",
        "totalprice": 706,
        "depositpaid": false,
        "bookingdates": {
            "checkin": "2024-06-08",
            "checkout": "2024-10-31"
        },
        "additionalneeds": "Breakfast Update"
    },
    "expected_result": {
        "status_code": STATUS_CODE_NOT_ALLOWED,
        "json_schema":{}
    }
}

module.exports = test_data;
