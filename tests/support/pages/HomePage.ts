import { Page, expect } from "@playwright/test";

export class HomePage {
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    private readonly profileUsername: string = 'Profile';
  
    public async assertProfileUsername(username: string) {
      await expect(this.page.getByLabel(this.profileUsername)).toHaveText(username);
    }
  }