import { test, expect, request } from '@playwright/test'
import { UsersRequests } from '../support/services/UserService'
import { AuthRequests } from '../support/services/AuthService'
import loginFixture from '../support/fixtures/login.json'
import commonsFixture from '../support/fixtures/commons.json'
import usersFixture from '../support/fixtures/users.json'
import { faker } from '@faker-js/faker'
import userSchema from '../support/contracts/users.contract'

const authorization = "Authorization"
const bearer = "Bearer "

test('Post user with valid data', { tag: ['@api'] }, async ({}) => {
    const requestContext = await request.newContext()
    const authRequests = new AuthRequests(requestContext)
    const usersRequests = new UsersRequests(requestContext)

    const responsePostLogin = await authRequests.postLogin(
        loginFixture.username.valid,
        loginFixture.password.valid,
        commonsFixture.headers as { [key: string]: string }
    );

    const responseBody = await responsePostLogin.json()
    const accessToken = responseBody.accessToken
    
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const password = faker.internet.password()
    const username = faker.internet.userName()

    const responsePostUser = await usersRequests.postUser(
        firstName,
        lastName,
        password,
        usersFixture.roles,
        username,
        {
          authorization: bearer + accessToken
        }
    )
    const responseBodyPostUser = await responsePostUser.json()
    expect(responsePostUser.ok()).toBeTruthy();
    expect(responseBodyPostUser.firstName).toBe(firstName)
    expect(responseBodyPostUser.lastName).toBe(lastName)
    expect(responseBodyPostUser.roles).toStrictEqual(usersFixture.roles)
    expect(responseBodyPostUser.username).toBe(username)
    userSchema.validateAsync(responseBodyPostUser)
});

test('Post user with repeated username', { tag: ['@api'] }, async ({}) => {
    const requestContext = await request.newContext()
    const authRequests = new AuthRequests(requestContext)
    const usersRequests = new UsersRequests(requestContext)

    const responsePostLogin = await authRequests.postLogin(
        loginFixture.username.valid,
        loginFixture.password.valid,
        commonsFixture.headers as { [key: string]: string }
    );

    const responseBody = await responsePostLogin.json()
    const accessToken = responseBody.accessToken
    
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const password = faker.internet.password()
    const username = faker.internet.userName()

    const responsePostUser = await usersRequests.postUser(
        firstName,
        lastName,
        password,
        usersFixture.roles,
        username,
        {
          authorization: bearer + accessToken
        }
    )
    const responseBodyPostUser = await responsePostUser.json()
    expect(responsePostUser.ok()).toBeTruthy();
    expect(responseBodyPostUser.firstName).toBe(firstName)
    expect(responseBodyPostUser.lastName).toBe(lastName)
    expect(responseBodyPostUser.roles).toStrictEqual(usersFixture.roles)
    expect(responseBodyPostUser.username).toBe(username)
    userSchema.validateAsync(responseBodyPostUser)
});