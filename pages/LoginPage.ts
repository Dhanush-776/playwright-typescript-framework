import { Locator, Page } from '@playwright/test';
import { LoginData } from '../test-data/loginData';

export class LoginPage {
    private readonly usernameTextbox: Locator;
    private readonly passwordTextbox: Locator;
    private readonly loginButton: Locator;
    
    constructor(private readonly page: Page) { 

        this.usernameTextbox = page.locator('#user-name');
        this.passwordTextbox = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    
    }

    async goto(): Promise<void>{
        await this.page.goto('/');
    }

    async enterUsername(username: string): Promise<void> {
        await this.usernameTextbox.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordTextbox.fill(password);
    }

    async clickLogin(): Promise<void> {
        await this.loginButton.click();
    }

    async login(loginData: LoginData): Promise<void>{
        await this.enterUsername(loginData.username);
        await this.enterPassword(loginData.password);
        await this.clickLogin();
    }
} 