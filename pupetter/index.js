const puppeteer = require('puppeteer');

(async () => {
 const browser = await puppeteer.launch({headless: false});
 const page = await browser.newPage();
 await page.goto("https://www.wikihow.com/Teach-Children-to-Sing");
 //await page.screenshot({ path: "my.png"});

// const grabParagraph = await page.evaluate(() => {
//     const pgtag = document.querySelector(".mf-section-0 p"); // if it has more than one class name we need to remove space between them and add dot(.)
//     // space p bcz we want to get p which is inside this class
//     return pgtag.innerHTML; // use innertext if you just want text element
// })
// console.log(grabParagraph);

 const grabStep = await page.evaluate(() => {
    const pgtag = document.querySelectorAll(".section.steps.steps_first.sticky ol li .step b");
    let out = [];
    pgtag.forEach((element) => {
        out.push(element.innerHTML)
    })
    return out; 
})
console.log(grabStep);
 await browser.close();
})();