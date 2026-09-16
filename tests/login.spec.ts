import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import { loginData } from '../test-data/loginData';

test.describe('Login Tests', () => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
    });

    for (const data of loginData) {

        test(`Login with ${data.username} - ${data.expectedOutcome} @login`,
            async ({ loginPage, dashboardPage }) => {
                await loginPage.login(data);

                if (data.expectedOutcome == 'success') {
                    await expect(dashboardPage.productTitle).toBeVisible();
                }
                else {
                    await expect(loginPage.errorMessage).toContainText(`${data.expectedError}`);
                }
            })

    }
});
