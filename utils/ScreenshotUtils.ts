import { Page } from '@playwright/test';

export class ScreenshotUtils {

    static async takeScreenshot(
        page: Page,
        name: string
    ): Promise<void> {
        await page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: true
        });
    }
}