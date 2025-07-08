const restApiCaller = require('../../callers/rest-api');

const endpointGetBooking ="/booking";

async function getBooking() {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: endpointGetBooking,
        header: {
            "Content-Type": "application/json"
        },
        //body:body
    })
    const res = await caller.get()
    return res
}


module.exports={
    getBooking
};