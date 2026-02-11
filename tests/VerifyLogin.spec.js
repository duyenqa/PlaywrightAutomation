import { test } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://duyenqa.github.io/firstweb/pages/login.html');
});

test('TC1: verify log in successfully', async ({ page }) => {
  const login = new LoginPage(page);
  await login.testLogIn("demouser@example.com", "Test@user1");
  await login.testLogOut();
})

test('TC2: verify log in failure in case: email and password are blank', async ({ page }) => {
  const login = new LoginPage(page);
  await login.testLogIn("", "");
})

test('TC3: verify log in failure in case: password blank', async ({ page }) => {
  const login = new LoginPage(page);
  await login.testLogIn("demouser@example.com", "");
})

test.afterEach(async ({ page }) => {
  await page.close();
});

test.afterAll(async () => {
  console.log('Done');
});
