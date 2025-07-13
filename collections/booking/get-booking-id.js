const restApiCaller = require('../../callers/rest-api');

const endpointGetBooking ="/booking/";

async function getBookingId(header, id) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: endpointGetBooking + id,
        header: header
    })
    
    const res = await caller.get()
    return res
}


module.exports={
    getBookingId
};