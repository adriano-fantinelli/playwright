import { APIRequestContext } from '@playwright/test';
import commonsFixture from '../fixtures/commons.json';
const loginPath = "/login";

export class AuthRequests {
    private requestContext: APIRequestContext;

    constructor(requestContext: APIRequestContext) {
        this.requestContext = requestContext;
    }

    async postLogin(username: string, password: string, headers: { [key: string]: string }) {
        const response = await this.requestContext.post(commonsFixture.baseUrlApi + loginPath, {
            data: {
                username: username,
                password: password
            },
            headers: headers
        });
        return response; 
    }
}