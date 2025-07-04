const request = require('supertest')

class RestApiCaller {
    constructor(object) {
        this.url = object.url;
        this.endPoint = object.endPoint;
        this.header = object.header;
        this.param = object.param;
        this.body = object.body;
        this.formData = object.formData;
    }
    async post() {
        const res = request(this.url)
            .post(this.endPoint)
            .set(this.header)
            .send(this.body)
        return res
    }
}

module.exports = RestApiCaller;