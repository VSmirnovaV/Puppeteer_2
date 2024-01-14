const {clickElement, getText} = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("booking ticket tests", () => {

    test("successful booking ticket 'Zveropolis'", async () => {
        await clickElement(page, 'body > nav > a:nth-child(3)');
        await clickElement(page, 'body > main > section:nth-child(2) > div:nth-child(2) > ul > li:nth-child(1) > a');
        await clickElement(page, 'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(4)');
        await clickElement(page, 'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(7)');
        await clickElement(page, 'button');
        const actual = await getText(page, 'button');
        await expect(actual).toEqual('Получить код бронирования');
    }, 60000);

    test("successful booking ticket 'Unesennyye vetrom'", async () => {
      await clickElement(page, 'body > nav > a:nth-child(5)');
      await clickElement(page, 'body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a');
      await clickElement(page, 'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(4)');
      await clickElement(page, 'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(7)');
      await clickElement(page, 'button');
      const actual = await getText(page, 'button');
      await expect(actual).toEqual('Получить код бронирования');
  }, 60000);

  test("unsuccessful booking ticket 'Zveropolis', don't choose a place", async () => {
    await clickElement(page, 'body > nav > a:nth-child(3)');
    await clickElement(page, 'body > main > section:nth-child(2) > div:nth-child(2) > ul > li:nth-child(1) > a');
    const actual = await page.$eval("button", link => link.getAttribute('disabled'));
    const expected = "true";
    await expect(actual).toEqual(expected);
  }, 60000);
});