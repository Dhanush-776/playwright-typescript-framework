import { Locator, Page } from "@playwright/test";

export class DashboardPage {

    readonly productTitle: Locator;

    async goto(){
        await this.page.goto('/inventory.html');
    }

    constructor(private readonly page: Page){
        this.productTitle = page.getByText('Products', { exact: true });
    }

    private inventoryItem(name: string){
        return this.page.locator('[data-test="inventory-item"]').filter({ hasText: name});
    }

    async addToCart(productName: string){
        await this.inventoryItem(productName).getByRole('button', { name: 'Add to cart'}).click();
    }

    async goToCart(){
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }
    
}