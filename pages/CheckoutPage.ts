import { Page, Locator } from '@playwright/test';

export class CheckoutPage{

    private readonly firstNameTextbox: Locator;
    private readonly lastNameTextbox: Locator;
    private readonly postalCodeTextbox: Locator;
    private readonly continueBtn: Locator;
    private readonly finishBtn: Locator;
    readonly errorMessage: Locator;

    constructor(private readonly page: Page){
        this.firstNameTextbox = this.page.locator('[data-test="firstName"]');
        this.lastNameTextbox = this.page.locator('[data-test="lastName"]');
        this.postalCodeTextbox = this.page.locator('[data-test="postalCode"]');
        this.continueBtn = this.page.locator('[data-test="continue"]');
        this.finishBtn = this.page.locator('[data-test="finish"]');
        this.errorMessage = this.page.locator('[data-test="error"]');
    }

    async enterFirstName(firstName: string): Promise<void> {
        await this.firstNameTextbox.fill(firstName);
    }

    async enterLastName(lastName: string): Promise<void> {
        await this.lastNameTextbox.fill(lastName);
    }

    async enterPostalCode(postalCode: string): Promise<void> {
        await this.postalCodeTextbox.fill(postalCode);
    }

    async clickContinue(): Promise<void>{
        await this.continueBtn.click();
    }

    async clickFinish(): Promise<void>{
        await this.finishBtn.click();
    }
}