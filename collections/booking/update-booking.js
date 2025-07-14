const restApiCaller = require('../../callers/rest-api');

const endpointBooking ="/booking/";

async function updateBooking(header, body, id, token) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: endpointBooking + id,
        header: header,
        body:body
    })
    
    const res = await caller.put()
    return res
}


module.exports={
    updateBooking
};