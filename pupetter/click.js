const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://quotes.toscrape.com/");

  await page.click('a[href="/login"]');
  await page.type("#username", "mnn");
  await page.type("#password", "123");

  await page.click('input[value="Login"]');
 // await browser.close();
})();
