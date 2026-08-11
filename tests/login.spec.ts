import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import { validLoginData } from '../test-data/loginData';

test('Login to SauceDemo', async ({ page, loginPage, dashboardPage}) => {

    await loginPage.goto();

    await loginPage.login(validLoginData);
    
    await expect(dashboardPage.productTitle).toBeVisible();

})