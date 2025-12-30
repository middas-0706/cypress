import { defineConfig } from 'cypress'

export default defineConfig({
  disallowCypressEnv: true,
  env: {
    CY_ENV_FOO: 'foo',
    CY_ENV_BAR: 'bar',
    CY_ENV_BAZ: 'baz',
  },
  e2e: {
    setupNodeEvents (on, config) {
      // implement node event listeners here
    },
    supportFile: false,
    fixturesFolder: false,
  },
})
