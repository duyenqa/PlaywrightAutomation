import { expect } from "@playwright/test";

class ContactPage {
    constructor(page) {
        this.page = page;
    }

    async testFormContact(firstName, lastName, email, country) {
        //textbox
        await this.page.locator('#fname').fill(firstName);
        await this.page.locator("#lname").fill(lastName);
        await this.page.locator("#email").fill(email);

        //combobox
        const selectCountry = await this.page.locator("#country");
        await selectCountry.selectOption(country);

        //radio
        await this.page.locator("(//input[@type='radio'])[2]").check();

        //multi checkbox
        const checkboxs = await this.page.$$('//input[@name="color"]');
        for(const elements of checkboxs){
            await elements.check();
        }

        //textarea
        await this.page.locator('#description').fill("Đây là dòng mô tả...");

        //textbox datetime
        //Cách 1
        // await this.page.locator('#datepicker', '12/02/2026').click();

        //Cách 2:
        await this.page.click('#datepicker');

        const dates = await this.page.$$('//span[@class="flatpickr-day today"]');
        for(const dt of dates){
            const body = await dt.textContent();
            if(body == "12"){
                await dt.click();
                break;
            }
        }

        await this.page.waitForTimeout(2000);
        //button
        await this.page.locator('//input[@type="submit"]').click();
    }
}
export default ContactPage;