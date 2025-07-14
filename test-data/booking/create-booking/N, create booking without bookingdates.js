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
        "firstname" : "Clau",
        "lastname" : "Brown",
        "totalprice" : 111,
        "depositpaid" : true,
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

