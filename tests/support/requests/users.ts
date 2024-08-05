import { APIRequestContext } from '@playwright/test';
import commonsFixture from '../fixtures/commons.json';
const usersPath = "/users";

export class UsersRequests {
    private requestContext: APIRequestContext;

    constructor(requestContext: APIRequestContext) {
        this.requestContext = requestContext;
    }

    async postUser(firstName: string, lastName: string, password: string, roles: Array<String>, username: string,  headers: { [key: string]: string }) {
        const response = await this.requestContext.post(commonsFixture.baseUrlApi + usersPath, {
            data: {
                "firstName": firstName,
                "lastName": lastName,
                "password": password,
                "roles": roles,
                "username": username
            },
            headers: headers
        });
        return response;
    };
}