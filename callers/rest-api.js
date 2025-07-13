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

    async get() {
        const res = request(this.url)
            .get(this.endPoint)
            .set(this.header)
        return res
    }

    async put() {
        const res = request(this.url)
            .put(this.endPoint)
            .set(this.header)
            .send(this.body)
        return res
    }

    async patch() {
        const res = request(this.url)
            .patch(this.endPoint)
            .set(this.header)
            .send(this.body)
        return res
    }

    async delete() {
        const res = request(this.url)
            .delete(this.endPoint)
            .set(this.header)
        return res
    }
}

module.exports = RestApiCaller;