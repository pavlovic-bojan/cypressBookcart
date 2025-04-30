import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://bookcart.azurewebsites.net',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
