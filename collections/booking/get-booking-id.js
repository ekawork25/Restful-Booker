const restApiCaller = require('../../callers/rest-api');

const endpointGetBooking ="/booking/";;

async function getBookingById(header, id) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: endpointGetBooking + id,
        header: {
            "Content-Type": "application/json"
        },
       // body:body
    })
    console.log("PRINT CALLER ", caller);
    const res = await caller.get()
    return res
}


module.exports={
    getBookingById
};  