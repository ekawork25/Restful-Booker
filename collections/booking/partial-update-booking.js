const restApiCaller = require('../../callers/rest-api');

const endpointBooking ="/booking/";

async function updatePartialBooking(header, body, id, token) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: endpointBooking + id,
        header: header,
        body:body
    })
    
    const res = await caller.patch()
    return res
}


module.exports={
    updatePartialBooking
};