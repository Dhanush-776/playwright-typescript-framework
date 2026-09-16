import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

type Fixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
}

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    dashboardPage: async ( { page }, use ) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },

    cartPage: async ( { page }, use ) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },

    checkoutPage: async ( { page }, use ) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    }

});