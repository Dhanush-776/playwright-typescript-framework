import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import { loginData } from '../test-data/loginData';

test.describe('Login Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
    });

    for (const data of loginData) {

        test(`Login with ${data.username} - ${data.shouldLogin ? 'valid credentials' : 'invalid credentials'}`,
            async ({ page, loginPage, dashboardPage }) => {
                await loginPage.login(data);

                if (data.shouldLogin == true) {
                    await expect(dashboardPage.productTitle).toBeVisible();
                }
                else {
                    await expect(page.getByRole('heading', { name: data.expectedError })).toBeVisible();
                }
            })

    }
});
