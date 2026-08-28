import { test, expect } from '@playwright/test';

test('Testing Visual Component', async( { page }) => {

    await page.goto('/inventory.html');
    await expect(page.locator('.inventory_list')).toHaveScreenshot('inventory_list.png');

});