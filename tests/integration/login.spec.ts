import { test, expect } from '@playwright/test';
import { LoginPage } from '../support/pages/LoginPage';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage();
  await loginPage.openLoginPage(page);

  await loginPage.setUsername(page, 'admin');
  await loginPage.setPassword(page, 'admin');
  await loginPage.clickLoginButton(page);

  // Add assertions here
});

test('Login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage();
  await loginPage.openLoginPage(page);

  await loginPage.setUsername(page, 'invalidUsername');
  await loginPage.setPassword(page, 'invalidPassword');
  await loginPage.clickLoginButton(page);

  // Add assertions here
});
