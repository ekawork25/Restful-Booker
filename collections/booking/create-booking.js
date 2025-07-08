const restApiCaller = require('../../callers/rest-api');

const endpointCreateBooking ="/booking";

async function createBooking(header, body) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: endpointCreateBooking,
        header: header,
        body:body
    })
    
    const res = await caller.post()
    return res
}


module.exports={
    createBooking
};