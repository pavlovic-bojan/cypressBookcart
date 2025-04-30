import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    specPattern: 'apps/**/*.{cy,spec}.{ts,js}',
    baseUrl: 'https://bookcart.azurewebsites.net',
    supportFile: 'cypress/support/apps.ts',
  },
});
