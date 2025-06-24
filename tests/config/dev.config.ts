import { PlaywrightTestConfig } from '@playwright/test';

const devConfig: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://development.com',
  }
};

export default devConfig;