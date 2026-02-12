import { test } from "@playwright/test";
import ContactPage from "../pages/ContactPage";

test.beforeEach(async ({ page }) => {
    await page.goto("https://duyenqa.github.io/firstweb/pages/contact.html");
    await page.waitForTimeout(3000);
})

test('TC1: Verify form in contact page', async ({ page }) => {
    const obj = new ContactPage(page);
    await obj.testFormContact("Kim Duyên", "Ngô Thị", "test01@example.com", "germany");
})

test.afterEach(async ({ page }) => {
    await page.close();
})

test.afterAll(async () => {
    console.log('Done');
});