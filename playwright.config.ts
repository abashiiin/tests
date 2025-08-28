import { defineConfig } from '@playwright/test';


export default defineConfig({
    testDir: './tests', // Папка с тестами
    timeout: 30_000, // Таймаут на каждый тест (30 секунд)
    retries: 0, // Без повторных попыток
    reporter: [['html', { open: 'never' }]],


    use: {
        headless: true, // Запуск в headless-режиме (фоновом, без отображения окна.
        // Можно отобразить - false, тогда откроет браузери ты все действия увидишь сам)
        baseURL: 'http://google.ru', // Базовый адрес сайта
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure', // Скриншоты при падении
        video: 'off', // отключено, но можно заменить на 'retain-on-failure'
    },


    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        }
    ],
});
