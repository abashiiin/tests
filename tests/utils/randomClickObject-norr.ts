import {expect, Page, test} from '@playwright/test';

export async function clickNORR(page: Page): Promise<string> {
    // Выбираем все строки с нужными атрибутами и классами
    const rows = page.locator('tr.objects-row.tr-background-color-green[data-pfm]');

// Получаем количество строк
    const count = await rows.count();
    if (count === 0) throw new Error('Нет объектов для клика');

// Выбираем случайную строку
    const randomIndex = Math.floor(Math.random() * count);
    const row = rows.nth(randomIndex);

// Для логирования получаем objectid
    const objectId = await row.getAttribute('objectid');
    console.log('Выбранный objectid:', objectId);

// Кликаем по первой ячейке внутри строки
    const firstCell = row.locator('td').first();
    await firstCell.scrollIntoViewIfNeeded();
    await firstCell.click({ force: true });

}