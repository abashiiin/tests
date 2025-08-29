import { test, expect } from '@playwright/test';
import { auth } from './utils/auth';
import { click } from './utils/randomClickObject'

test.beforeEach(async ({ page }) => {
    await auth(page);
});

test.describe('ЕРОН', () => {
    test('Все объекты у НСРСМ', async ({page}) => {
        await page.waitForTimeout(1000);
        await page.click('#working_with_eron_txt')
        await page.waitForTimeout(1000);
        await page.click('#tab_director_cn');
        await page.waitForTimeout(1000);
        await page.click('text=Все объекты');
        await page.waitForTimeout(1000);
        // await click(page);
        const selectedId = await click(page);
        console.log('Объект:', selectedId)
        await page.waitForTimeout(1000);
        const page1Promise = page.waitForEvent('popup');
        await page.click('text=В новом окне')
        const page1 = await page1Promise;

        await expect(page1).toHaveURL(new RegExp(`${selectedId}`));

        // const expectedId = 'api2';
        // expect(page1.url()).toContain(expectedId);



    });

});
