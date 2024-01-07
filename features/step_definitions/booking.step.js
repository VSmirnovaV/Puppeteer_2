const {Given, When, And, Then, Before, After} = require('cucumber');
const puppeteer = require('puppeteer');
const expect = require('chai');

let page;

Before(async function() {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 50
    });
    const page = await browser.newPage();
    this.browser = browser;
    this.page = page;
});
  
After(async function() {
    if(this.browser) {
      await this.browser.close();
    }
});

Given('user is on {string} page', async function (string) {
    return await this.page.goto(string);
});

When('user chooses {int} day', async function (int) {
    const day = 'body > nav > a:nth-child(2)';
    return await day.click();
});

And('user chooses {string} film', async function (string) {
    const film = 'body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a';
    return await film.click();
});

And('user chooses {string} film', async function (string) {
    const film = 'body > main > section:nth-child(2) > div.movie-seances__hall > ul > li > a';
    return await film.click();
});

And('user chooses {int} place on the {int} row', async function (int, int) {
    const ticket_1 = 'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(5)';
    return await ticket_1.click();
});

And('user chooses {int} place on the {int} row', async function (int, int) {
    const ticket_2 = 'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)';
    return await ticket_2.click();
});

And('user click the button', async function() {
    const button = '.acceptin-button';
    return await button.click();
});

Then('user sees the button with the text: {string}', async function(string) {
    const actual = await page.$eval(".acceptin-button", link => link.textContent);
    const expected = string;
    expect(actual).toEqual(expected);
});

Then('user sees the inactive button "Забронировать"', async function() {
    const actual = await this.page.$eval("button", link => link.getAttribute('disabled'));
    const expected = "true";
    expect(actual).toEqual(expected);
});
