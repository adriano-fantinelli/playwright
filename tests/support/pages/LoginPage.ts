import { Page, expect } from "@playwright/test";

export class LoginPage {
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    private readonly usernameInputSelector: string = 'input#username';
    private readonly passwordInputSelector: string = 'input#password';
    private readonly loginButtonSelector: string = 'button#logInButton';
    private readonly alert: any = 'alert';

    async openLoginPage() {
      await this.page.goto('/');
    }
  
    async setUsername(username: string) {
      await this.page.fill(this.usernameInputSelector, username);
    }
  
    async setPassword(password: string) {
      await this.page.fill(this.passwordInputSelector, password);
    }
  
    async clickLoginButton() {
      await this.page.click(this.loginButtonSelector);
    }
    
    public async assertAlert(message: string) {
        await expect(this.page.getByRole(this.alert).first()).toHaveText(message);
    }
  }