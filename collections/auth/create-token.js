const restApiCaller = require('../../callers/rest-api');

const endpointCreateToken="/auth";;

async function createToken(body) {
    const caller = new restApiCaller({
        url: __URL__,
        endPoint: endpointCreateToken,
        header: {
            "Content-Type": "application/json"
        },
        body:body
    })
    const res = await caller.post()
    return res
}


module.exports={
    createToken
};