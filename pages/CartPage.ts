import { Locator, Page } from "@playwright/test";

export class CartPage{

    constructor(private readonly page: Page){ }

    private cartItem(name: string){
        return this.page.locator('[data-test="inventory-item"]').filter({ hasText: name });
    }

    async removeCartItem(productName: string){
        await this.cartItem(productName).getByRole('button', { name: 'Remove' }).click();
    }

    readonly cartBadge = () => this.page.locator('[data-test="shopping-cart-badge"]');
}