export class LoginPage {
    private readonly usernameInputSelector: string = 'input#username';
    private readonly passwordInputSelector: string = 'input#password';
    private readonly loginButtonSelector: string = 'button#logInButton';
  
    async openLoginPage(page: any) {
      await page.goto('/');
    }
  
    async setUsername(page: any, username: string) {
      await page.fill(this.usernameInputSelector, username);
    }
  
    async setPassword(page: any, password: string) {
      await page.fill(this.passwordInputSelector, password);
    }
  
    async clickLoginButton(page: any) {
      await page.click(this.loginButtonSelector);
    }
  }