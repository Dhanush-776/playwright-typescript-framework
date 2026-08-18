import { Locator, Page } from "@playwright/test";

export class DashboardPage {

    readonly productTitle: Locator;

    async goto(){
        await this.page.goto('/inventory.html');
    }

    constructor(private readonly page: Page){
        this.productTitle = page.getByText('Products', { exact: true });
    }
    
}