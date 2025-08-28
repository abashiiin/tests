import { test, expect } from '@playwright/test';

test.describe('Кейклоак', () => {
    test('Авторизация в кк', async ({page}) => {
        await page.goto('https://test.komnportal.fix-price.ru/');
        await page.fill('#username', process.env.USERNAME!);
        await page.fill('#password', process.env.PASSWORD!);
        await page.click('#kc-login');
        await page.waitForTimeout(5000);


    });

});
