import { test, expect } from '@playwright/test';
import { auth } from './utils/auth';
import { clickNSRSM } from './utils/randomClickObject-nsrsm';
import { clickNORR } from './utils/randomClickObject-norr'; // Клик по объекту для норра (доделать)

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

        const selectedId = await clickNSRSM(page);
        await page.waitForTimeout(1000);
        await page.locator('text=В новом окне').click();
        const page1Promise = page.waitForEvent('popup');

        const page1 = await page1Promise;

        expect(page1.url()).toContain(String(selectedId));
        console.log('Открылась страница с номером объекта:', selectedId)

    });

});
