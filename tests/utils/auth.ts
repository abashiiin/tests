import { Page } from '@playwright/test';

export async function auth(page: Page) {
    await page.goto('https://test.komnportal.fix-price.ru/');
    await page.fill('#username', process.env.USERNAME!);
    await page.fill('#password', process.env.PASSWORD!);
    await page.click('#kc-login');
}