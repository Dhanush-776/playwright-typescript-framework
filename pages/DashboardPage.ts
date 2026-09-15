import { Locator, Page } from "@playwright/test";
import { Logger } from "../utils/Logger";

export class DashboardPage {

    readonly productTitle: Locator;

    async goto(){
        Logger.info('Navigating to inventory page');
        await this.page.goto('/inventory.html');
    }

    constructor(private readonly page: Page){
        this.productTitle = page.getByText('Products', { exact: true });
    }

    private inventoryItem(name: string){
        return this.page.locator('[data-test="inventory-item"]').filter({ hasText: name});
    }

    async addToCart(productName: string){
        Logger.info(`Adding product to cart: ${productName}`);
        await this.inventoryItem(productName).getByRole('button', { name: 'Add to cart'}).click();
    }

    async goToCart(){
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }
    
}