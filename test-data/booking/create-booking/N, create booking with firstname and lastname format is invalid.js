const path = require('path');
const { json } = require('stream/consumers');
const scriptName = path.basename(__filename).split('.')[0];
const schema = require('../../../schema/create-booking.json');

const test_data = {
    "title": scriptName,
    "header": {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    "body": {
        "firstname" : 12345,
        "lastname" : 67890,
        "totalprice" : 800,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    },
    "expected_result": {
        "status_code": STATUS_INTERNAL_SERVER_ERROR,
        "body": {
            "text": "Internal Server Error"
        },
        "json_schema": schema.__INVALID__
    }
}

module.exports = test_data;

