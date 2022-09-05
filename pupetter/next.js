const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://quotes.toscrape.com/");

  const grabQuotes = await page.evaluate(() => {
    const quotes = document.querySelectorAll(".quote");
    let quotesArr = [];
    quotes.forEach((qouteTag) => {
      //const actualQuote = quoteTag.querySelectorAll();
      const quoteInfo = qouteTag.querySelectorAll("span");
      const actualQuote = quoteInfo[0];
      const actualArthor = quoteInfo[1];

      const authorName = actualArthor.querySelector("small");

      quotesArr.push({
        quote: actualQuote.innerText,
        author: authorName.innerText,
      });
    });
    return quotesArr;
  });
  console.log(grabQuotes);
  await browser.close();
})();
