const restApiCaller = require('../../callers/rest-api');

const endpointPing ="/ping";

async function healthCheck(header) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: endpointPing,
        header:header
    })
    
    const res = await caller.get()
    return res
}


module.exports={
    healthCheck
};