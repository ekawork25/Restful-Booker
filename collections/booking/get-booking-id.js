const restApiCaller = require('../../callers/rest-api');

const endpointGetBooking ="/booking/";

async function getBookingId(id) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: endpointGetBooking + id,
        header: {
            "Content-Type": "application/json"
        },
        //body:body
    })
    const res = await caller.get()
    return res
}


module.exports={
    getBookingId
};  