import { test, expect } from '@playwright/test';
import { auth } from './auth';

test.beforeEach(async ({ page }) => {
    await auth(page);
});

test.describe('Кейклоак', () => {
    test('Авторизация в кк', async ({page}) => {
        await page.click('#working_with_eron_txt')
        await page.click('#tab_director_cn');
        await page.click('text=Все объекты');
        await page.waitForTimeout(3000);
    });

});
