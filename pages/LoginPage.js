import { expect } from "@playwright/test";

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async testLogIn(email, password) {
        await this.page.once('dialog', async dialog => {
            if (email.length <= 0 && password.length <= 0) {
                expect(dialog.message()).toBe("Required field");
                await dialog.accept();
            } else if (email.length > 0 && password.length <= 0) {
                expect(dialog.message()).toBe("Required field");
                await dialog.accept();
            } else if (email.length <= 0 && password.length > 0) {
                expect(dialog.message()).toBe("Required field");
                await dialog.accept();
            } else {
                await expect(page.locator('//h3[@class="welcome"]')).toHaveText('Welcome to Dashboard');
            }
        });

        await this.page.locator('#username').fill(email);
        await this.page.locator('#password').fill(password);
        await this.page.waitForTimeout(2000);
        await this.page.locator('.btnLogin').click();
    }
}
export default LoginPage;