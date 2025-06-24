import { PlaywrightTestConfig } from '@playwright/test';

const localConfig: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://localhost:3001',
  }
};

export default localConfig;