import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';
import { ScreenshotUtils } from '../utils/ScreenshotUtils';

test('Testing Inventory Storage State', async ( { page, dashboardPage }) => {
    await dashboardPage.goto();
    await expect(dashboardPage.productTitle).toBeVisible();
    await expect(page.locator('[data-test="inventory-item-name"]')).toHaveCount(6);
    await ScreenshotUtils.takeScreenshot(page, 'inventory-page');
});

test('Remove a specific product from cart using filter', async({ dashboardPage, cartPage }) => {

    await dashboardPage.goto();
    await dashboardPage.addToCart('Sauce Labs Bike Light');

    await expect(cartPage.cartBadge()).toHaveCount(1);

    await dashboardPage.goToCart();
    await cartPage.removeCartItem('Sauce Labs Bike Light');

    await expect(cartPage.cartBadge()).toHaveCount(0);
    
});