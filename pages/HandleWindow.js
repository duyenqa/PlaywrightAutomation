class HandleWindow {
    constructor(page) {
        this.page = page;
    }

    async testAccessWindow() {
        await this.page.click('#openwindow');

        const popupPromise = this.page.waitForEvent('popup');
        const popup = await popupPromise;

        // Đảm bảo popup đã load DOM
        await popup.waitForLoadState('domcontentloaded');

        const subWindowTitle = await popup.title();
        if (subWindowTitle === "All Courses") {
            //scroll
            let previousHeight;
            while (true) {
                previousHeight = await popup.evaluate(() => document.body.scrollHeight);
                await popup.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
                await popup.waitForTimeout(2000);
                const newHeight = await popup.evaluate(() => document.body.scrollHeight);
                if (newHeight === previousHeight) break;
            }
        }
        await this.page.waitForTimeout(8000);
    }
}
export default HandleWindow;