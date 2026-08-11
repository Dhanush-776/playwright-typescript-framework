import { Locator, Page } from "@playwright/test";

export class DashboardPage {

    readonly productTitle: Locator;

    constructor(private readonly page: Page){
        this.productTitle = page.getByText('Products', { exact: true });
    }
    
}