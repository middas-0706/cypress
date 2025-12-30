import { defineConfig } from 'cypress'

export default defineConfig({
  disallowCypressEnv: true,
  e2e: {
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
  },
})
