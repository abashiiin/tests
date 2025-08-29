import {expect, Page, test} from '@playwright/test';

export async function click(page: Page): Promise<string> {
    const cells = page.locator('tr[role="row"] td[aria-colindex="2"]:visible');
    const count = await cells.count();
    if (count === 0) throw new Error('Нет объектов');

    let randomIndex = Math.floor(Math.random() * count);
    let text = await cells.nth(randomIndex).innerText();
    text = text.trim();

    // Проверяем, что это число
    while (!/^\d+$/.test(text)) {
        randomIndex = Math.floor(Math.random() * count);
        text = (await cells.nth(randomIndex).innerText()).trim();
    }

    const selectedId = Number(text);

    // Клик после сохранения числа
    const cell = cells.nth(randomIndex);
    await cell.scrollIntoViewIfNeeded();
    await cell.click({ force: true });

    return selectedId;

}