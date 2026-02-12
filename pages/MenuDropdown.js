class MenuDropdown {
    constructor(page) {
        this.page = page;
    }

    async testClickDropdown() {
        await this.page.locator(".dropbtn").click();
        await this.page.waitForTimeout(3000);
    }

    async testTagOfDropdownMenu(){
        const tags = await this.page.$$("#myDropdown");
        for(const elements of tags){
            const rs = await elements.textContent();
            console.log(rs);
        }
    }
}
export default MenuDropdown;