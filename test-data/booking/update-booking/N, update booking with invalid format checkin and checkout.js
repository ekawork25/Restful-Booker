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
        "firstname": "Josh X",
        "lastname": "Allen X",
        "totalprice": 900,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "22/21/2025",
            "checkout": "22/22/2025"
        },
        "additionalneeds": "super bowls"
    },
    "expected_result": {
        "status_code": 200,
        "json_schema":{}
    }
}

module.exports = test_data;
