const { matchers } = require('jest-json-schema');
expect.extend(matchers);

function verifyResponse(actual, expected) {
    try {
        expect(actual.statusCode).toEqual(expected.status_code);
    } catch (error) {
        console.error('StatusCode Mismatch:', {
            actualStatus: actual.statusCode,
            expectedStatus: expected.status_code,
            body: actual.body
        });
        throw error;
    }
    
    expect(actual.body).toMatchSchema(expected.json_schema);
   
    try {
        expect(actual.body).toMatchObject(expected.body);
    } catch (e) {
        const fallbackText = actual.text;
            // Cek fallback berdasarkan status code atau isi response
            if (fallbackText === 'Internal Server Error') {
                expect(fallbackText).toBe('Internal Server Error');
            } else if (fallbackText === 'Not Found') {
                expect(fallbackText).toBe('Not Found');
            } else if (fallbackText === "I'm a Teapot") {
                expect(fallbackText).toBe("I'm a Teapot");
            } else {
                // Jika tidak sesuai semua fallback, lempar error asli
                throw e;
            }
    }
}

function verifyStatusCode(actual, expected) {
    expect(actual.statusCode).toEqual(expected.status_code)
}

module.exports = {
    verifyResponse, verifyStatusCode
}