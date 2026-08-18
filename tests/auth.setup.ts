import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ( { page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login( { username: 'standard_user', password: 'secret_sauce', shouldLogin: true});
    await page.context().storageState( { path: authFile});
});