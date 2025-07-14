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
        "firstname" : "Clara",
        "lastname" : "Brown",
        "totalprice" : "abc",
        "depositpaid" : true,
        "bookingdates" : {
            "checkin" : "2018-01-01",
            "checkout" : "2019-01-01"
        },
        "additionalneeds" : "Breakfast"
    },
    "expected_result": {
        "status_code": STATUS_CODE_OK,
        "body": {
             "booking":{
                "firstname" : "Clara",
                "lastname" : "Brown",
                "totalprice" : null,
                "depositpaid" : true,
                "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                },
                "additionalneeds" : "Breakfast"
            }
        },
        "json_schema": schema.__VALID__
    }
}

module.exports = test_data;

