import {expect, Page, test} from '@playwright/test';

export async function clickNSRSM(page: Page): Promise<number> {
    const cells = page.locator('tr[role="row"] td[aria-colindex="2"]:visible');
    const count = await cells.count();
    if (count === 0) throw new Error('Нет объектов');

    let randomIndex = Math.floor(Math.random() * count);
    let text = await cells.nth(randomIndex).innerText();
    text = text.trim();

    const selectedId = Number(text);

    const cell = cells.nth(randomIndex);
    await cell.scrollIntoViewIfNeeded();
    await cell.click();

    return selectedId;

}