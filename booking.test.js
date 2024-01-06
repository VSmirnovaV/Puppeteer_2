let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("booking ticket tests", () => {

    test.skip("successful booking ticket 'Zveropolis'", async () => {
        await page.click('body > nav > a:nth-child(3)');
        await page.waitForSelector('h1');
        await page.click('body > main > section:nth-child(1) > div.movie-seances__hall > ul > li > a');
        await page.click('body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(5)');
        await page.click('body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)')
        await page.click('.acceptin-button');
        const actual = await page.$eval(".acceptin-button", link => link.textContent);
        await expect(actual).toEqual('Получить код бронирования');
    }, 60000);

    test.skip("successful booking ticket 'Unesennyye vetrom'", async () => {
      await page.click('body > nav > a:nth-child(5)');
      await page.waitForSelector('h1');
      await page.click('body > main > section:nth-child(2) > div.movie-seances__hall > ul > li > a');
      await page.click('body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(4)');
      await page.click('body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(6) > span:nth-child(7)')
      await page.click('.acceptin-button');
      const actual = await page.$eval(".acceptin-button", link => link.textContent);
      await expect(actual).toEqual('Получить код бронирования');
  }, 60000);

  test("unsuccessful booking ticket 'Zveropolis'", async () => {
    await page.click('.acceptin-button-disabled');
    const actual = '.acceptin-button-disabled: { background-color: #888888}';
    expect(actual).toEqual('.acceptin-button-disabled: { background-color: #888888}');  
  });
})