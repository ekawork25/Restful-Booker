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
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    },
    "expected_result": {
        "status_code": 500,
        "body": {
            "text": "Internal Server Error"
        },
        "json_schema": schema.__INVALID__
    }
}

module.exports = test_data;

