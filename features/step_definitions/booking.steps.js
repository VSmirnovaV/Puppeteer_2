const {Given, When, Then, Before, After} = require('cucumber');
const puppeteer = require('puppeteer');
const expect = require('chai');
const {clickElement, getText} = require("../../lib/commands.js");
const assert = require('assert')

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
    return await clickElement(this.page, 'body > nav > a:nth-child(2)');
});

When('user chooses {string} film Zveropolis', async function (string) {
    return await clickElement(this.page, 'body > main > section:nth-child(1) > div:nth-child(2) > ul > li:nth-child(2) > a');
});

When('user chooses {string} film', async function (string) {
    return await clickElement(this.page, 'body > main > section:nth-child(2) > div:nth-child(2) > ul > li > a');
});

When('user chooses {int} place on the {int} row', async function (int, int) {
    return await clickElement(this.page, 'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(5)');
});

When('user chooses another {int} place on the {int} row', async function (int, int) {
    return await clickElement(this.page, 'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(3)');
});

When('user click the button', async function() {
    return await clickElement(this.page, 'button');
});

Then('user sees the button with the text: {string}', async function(string) {
    const actual = await getText(this.page, 'button');
    const expected = string;
    assert.equal(actual, expected);
});

Then('user sees the inactive button "Забронировать"', async function() {
    const actual = await this.page.$eval('button', link => link.getAttribute('disabled'));
    const expected = 'true';
    assert.equal(actual, expected);
    // expect(actual).contains(expected);
});