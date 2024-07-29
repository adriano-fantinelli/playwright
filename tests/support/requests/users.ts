const { request } = require('playwright');
const commonsFixture = require('../fixtures/commons.json')
const usersPath = "/users";

(async () => {
    const req = await request.newContext();

    const response = await req.post(commonsFixture.baseUrlApi + usersPath, {
        data: {
            "firstName": "John",
            "lastName": "Stone",
            "password": "string",
            "roles": [
                "string"
            ],
            "username": "string"
        }
    });

    if (response.ok()) {
        const jsonResponse = await response.json();
        console.log('Response JSON:', jsonResponse);
    } else {
        console.error('Request failed with status:', response.status());
    }

    await req.dispose();
})();