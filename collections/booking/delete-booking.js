const restApiCaller = require('../../callers/rest-api');

const endpointBooking ="/booking/";

async function deleteBooking(header, id, token) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: endpointBooking + id,
        header: header
    })
    
    const res = await caller.delete()
    return res
}


module.exports={
    deleteBooking
};