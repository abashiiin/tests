import { test, expect } from '@playwright/test';
import { request } from './request';

test.beforeEach(async({ page }) => {
    await page.goto('https://ya.ru');
});
test.describe('Запросы в яндекс', () => {
    test('Запрос playwright', async ({page}) => {
        await page.getByRole('combobox', {name: 'Запрос'}).click();
        await page.getByRole('combobox', {name: 'Запрос'}).fill(request.request);
        await page.getByRole('combobox', {name: 'Запрос'}).press('Enter');
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', {name: 'Fast and reliable end-to-end'}).click();
        const page1 = await page1Promise;
        await expect(page1.getByRole('link', {name: 'Playwright logo Playwright'})).toBeVisible();
    });
    test('Запрос selenium', async ({ page }) => {
        await page.getByRole('combobox', { name: 'Запрос' }).click();
        await page.getByRole('combobox', { name: 'Запрос' }).fill(request.request2);
        await page.getByRole('combobox', { name: 'Запрос' }).press('Enter');
        const page1Promise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'selenium.dev' }).click();
        const page1 = await page1Promise;
        await expect(page1.getByRole('link', { name: 'Selenium logo green' })).toBeVisible();

    });
});
ffff
