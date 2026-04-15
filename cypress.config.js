import { defineConfig } from "cypress";

const baseUrl = process.env.CYPRESS_BASE_URL || "http://localhost:4321/";

export default defineConfig({
  projectId: 'r4f1jp',
  allowCypressEnv: false,

  e2e: {
    baseUrl,
    setupNodeEvents(on, config) {
      // Intentionally empty for static site.
      return config;
    },
  },
});
