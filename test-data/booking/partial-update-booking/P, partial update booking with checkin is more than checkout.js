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
    "id": ID_PARTIAL_BOOKING_VALID,
    "body":{
        "bookingdates": {
            "checkin": "02-04-2025",
            "checkout": "02-03-2025"
        }
    },
    "expected_result": {
        "status_code": 200,
        "body": {
            "bookingdates": {
                "checkin": "02-04-2025",
                "checkout": "02-03-2025"
            }
        },
        "json_schema":{}
    }
}

module.exports = test_data;
