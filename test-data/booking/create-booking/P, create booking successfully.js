const path = require('path');
const { json } = require('stream/consumers');
const scriptName = path.basename(__filename).split('.')[0];
//const schema = require(`${__dirname.replace('test-data', 'schema')}.json`);

const test_data = {
    "title": scriptName,
    "header": {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    "body": {
        "firstname" : "Jim",
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
        "status_code": 200,
        "body": {}
    }
}
// console.log(JSON.stringify(test_data.header, null, 2));


module.exports = test_data;

