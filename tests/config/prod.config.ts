import { PlaywrightTestConfig } from '@playwright/test';

const prodConfig: PlaywrightTestConfig = {
  use: {
    baseURL: 'https://production.com',
  }
};

export default prodConfig;