import { test } from "@playwright/test";
import HandleWindow from "../pages/HandleWindow";

test.beforeEach(async ({ page }) => {
    await page.goto("https://www.letskodeit.com/practice");
})

test("TC1: Verify handle windows", async ({ page }) => {
    const obj = new HandleWindow(page);
    await obj.testAccessWindow();
})

test.afterEach(async ({ page }) => {
  await page.close();
});

test.afterAll(async () => {
    console.log('Done');
});