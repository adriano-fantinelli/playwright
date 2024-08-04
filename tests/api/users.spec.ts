import { test, expect, request } from '@playwright/test';
import { UsersRequests } from '../support/requests/Users';
import { AuthRequests } from '../support/requests/Auth';
import loginFixture from '../support/fixtures/login.json';
import commonsFixture from '../support/fixtures/commons.json';

test('POST request example', async ({}) => {
    const requestContext = await request.newContext();
    const authRequests = new AuthRequests(requestContext);
    const usersRequests = new UsersRequests();

    const responsePostLogin = await authRequests.postLogin(
        loginFixture.username.valid,
        loginFixture.password.valid,
        commonsFixture.headers as { [key: string]: string }
    );

    expect(responsePostLogin.ok()).toBeTruthy();
    const responseBody = await responsePostLogin.json();
    console.log(responseBody.accessToken);
    


});