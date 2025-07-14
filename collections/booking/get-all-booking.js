const restApiCaller = require('../../callers/rest-api');

const endpointGetBooking ="/booking";

async function getBooking(param) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: endpointGetBooking,
        header: {
            "Content-Type": "application/json"
        },
        param:param
    })
    const res = await caller.get()
    return res
}


module.exports={
    getBooking
};