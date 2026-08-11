import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import { loginData } from '../test-data/loginData';

for (const data of loginData) {

    test(`Login Test - ${data.username}`, async ({ page, loginPage, dashboardPage }) => {
        await loginPage.goto();
        await loginPage.login(data);

        if (data.shouldLogin == true) {
            await expect(dashboardPage.productTitle).toBeVisible();
        }
        else {
            await expect(page.getByRole('heading', { name: data.expectedError })).toBeVisible();
        }
    })

}