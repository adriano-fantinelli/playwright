import { test } from '@playwright/test';
import { LoginPage } from '../support/pages/LoginPage';
import { HomePage } from '../support/pages/HomePage';
import loginFixture from '../support/fixtures/login.json';

test('Login with valid credentials', { tag: ['@smoke', '@e2e'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.openLoginPage();
  await loginPage.setUsername(loginFixture.username.valid);
  await loginPage.setPassword(loginFixture.password.valid);
  await loginPage.clickLoginButton();
  await homePage.assertProfileUsername(loginFixture.username.valid)
});

test('Login with invalid username', { tag: ['@e2e'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();
  await loginPage.setUsername(loginFixture.username.invalid);
  await loginPage.setPassword(loginFixture.password.valid);
  await loginPage.clickLoginButton();
  await loginPage.assertAlert(loginFixture.messages.invalidEmailOrPassword)
});

test('Login with invalid password', { tag: ['@e2e'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();
  await loginPage.setUsername(loginFixture.username.valid);
  await loginPage.setPassword(loginFixture.password.invalid);
  await loginPage.clickLoginButton();
  await loginPage.assertAlert(loginFixture.messages.invalidEmailOrPassword)
});

test('Login with blank username', { tag: ['@e2e'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();
  await loginPage.setPassword(loginFixture.password.valid);
  await loginPage.clickLoginButton();
  await loginPage.assertAlert(loginFixture.messages.invalidEmailOrPassword)
});

test('Login with blank password', { tag: ['@e2e'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openLoginPage();
  await loginPage.setUsername(loginFixture.username.valid);
  await loginPage.clickLoginButton();
  await loginPage.assertAlert(loginFixture.messages.invalidEmailOrPassword)
});