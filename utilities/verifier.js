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
        // Fallback jika schema check gagal → kemungkinan plain text
        expect(actual.text).toBe('Internal Server Error');
    }
}

module.exports = {
    verifyResponse
}