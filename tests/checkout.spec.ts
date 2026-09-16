import { expect } from '@playwright/test';
import { test } from '../fixtures/fixtures';
import { createCheckoutData } from '../test-data/checkoutData';

test('Complete checkout using factory data @checkout', async ({
    dashboardPage,
    cartPage,
    checkoutPage
}) => {

    const checkoutData = createCheckoutData();

    await dashboardPage.goto();

    await dashboardPage.addToCart('Sauce Labs Bike Light');
    await dashboardPage.goToCart();

    await cartPage.clickCheckout();

    await checkoutPage.enterFirstName(checkoutData.firstName);
    await checkoutPage.enterLastName(checkoutData.lastName);
    await checkoutPage.enterPostalCode(checkoutData.postalCode);

    await checkoutPage.clickContinue();
    await checkoutPage.clickFinish();
});

test('Checkout with missing postal code @checkout', async ({
    dashboardPage,
    cartPage,
    checkoutPage
}) => {

    const checkoutData = createCheckoutData({
        postalCode: ''
    });

    await dashboardPage.goto();

    await dashboardPage.addToCart('Sauce Labs Bike Light');
    await dashboardPage.goToCart();

    await cartPage.clickCheckout();

    await checkoutPage.enterFirstName(checkoutData.firstName);
    await checkoutPage.enterLastName(checkoutData.lastName);
    await checkoutPage.enterPostalCode(checkoutData.postalCode);

    await checkoutPage.clickContinue();
    await expect(checkoutPage.errorMessage).toContainText('Error: Postal Code is required');
});
