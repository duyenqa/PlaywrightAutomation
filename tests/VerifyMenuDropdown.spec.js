import { test } from '@playwright/test';
import MenuDropdown from '../pages/MenuDropdown';

test.beforeEach(async ({ page }) => {
    await page.goto("https://duyenqa.github.io/firstweb/index.html");
    await page.waitForTimeout(3000);
})

test('TC1: dropdown in main menu', async ({ page }) => {
    const dropdown = new MenuDropdown(page);
    await dropdown.testClickDropdown();
    await dropdown.testTagOfDropdownMenu();
})

test.afterEach(async ({ page }) => {
    await page.close();
});

test.afterAll(async () => {
    console.log('Done');
});