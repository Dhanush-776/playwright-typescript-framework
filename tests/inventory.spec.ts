import { test } from '../fixtures/fixtures';
import { expect } from '@playwright/test';

test('Testing Inventory Storage State', async ( { page, dashboardPage }) => {

    await dashboardPage.goto();
    await expect(dashboardPage.productTitle).toBeVisible();

});