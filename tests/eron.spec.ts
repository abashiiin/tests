import { test, expect } from '@playwright/test';
import { auth } from './auth';

test.beforeEach(async ({ page }) => {
    await auth(page);
});

test.describe('Кейклоак', () => {
    test('Авторизация в кк', async ({page}) => {
        await page.goto('https://ya.ru');
        // await page.fill('#username', process.env.USERNAME!);
        // await page.fill('#password', process.env.PASSWORD!);
        // await page.click('#kc-login');
        // await page.waitForTimeout(5000);


    });

});
