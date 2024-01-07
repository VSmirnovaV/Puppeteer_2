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
        await page.click('body > nav > a:nth-child(3)');
        await page.waitForSelector('h1');
        await page.click('body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a');
        await page.click('body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(4)');
      await page.click('body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(7)');
        await page.click('button');
        const actual = await page.$eval("button", link => link.textContent);
        await expect(actual).toEqual('Получить код бронирования');
    }, 60000);

    test("successful booking ticket 'Unesennyye vetrom'", async () => {
      await page.click('body > nav > a:nth-child(5)');
      await page.waitForSelector('h1');
      await page.click('body > main > section:nth-child(2) > div.movie-seances__hall > ul > li > a');
      await page.click('body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(4)');
      await page.click('body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(7)');
      await page.click('button');
      const actual = await page.$eval("button", link => link.textContent);
      await expect(actual).toEqual('Получить код бронирования');
  }, 60000);

  test("unsuccessful booking ticket 'Zveropolis', don't choose a place", async () => {
    await page.click('body > nav > a:nth-child(2)');
    await page.click('body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a');
    const actual = await page.$eval("button", link => link.getAttribute('disabled'));
    const expected = "true";
    await expect(actual).toEqual(expected);
  }, 60000);
});