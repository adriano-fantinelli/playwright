const { request } = require('playwright');
const commonsFixture = require('../fixtures/commons.json')
const usersPath = "/users";

export class UsersRequests {

    constructor(){
    }

    postUser(body: object, headers: object) {
        (async () => {
            const response = await request.post(commonsFixture.baseUrlApi + usersPath, {
                data: body,
                headers: headers
            });
            return response;
        })();
    }
}