const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
console.log("Before");
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractHTML(html);
    }
}

// inspect -> 
// unique 
function extractHTML(html) {
    let $ = cheerio.load(html);
    let elemsArr = $("ds-text-tight-m ds-font-regular ds-flex ds-px-3 ds-py-2 lg:ds-px-4 lg:ds-py-[10px] ds-items-start ds-select-none lg:ds-select-auto ci-html-content");
    let text = $(elemsArr[0]).text();
    let htmldata = $(elemsArr[0]).html();

    console.log("text data", text);
    console.log("html data", htmldata);

}

