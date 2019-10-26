'use strict';

const puppeteer = require('puppeteer');

(async function main() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('https://example.org/');

        const result = await page.evaluate(async function(){
            await page.waitFor(1245)
        });
        console.log(result);
    } catch (err) {
        console.error(err);
    }
})();