import systemTests from '../lib/system-tests'

describe('disallowCypressEnv', () => {
  systemTests.setup()

  systemTests.it('throws an error when trying to use Cypress.env() with disallowCypressEnv=true', {
    project: 'disallow-cypress-env',
    configFile: 'cypress-with-disallow-cypress-env.config.ts',
    snapshot: true,
    expectedExitCode: 1,
    browser: 'electron',
  })

  systemTests.it('correctly prints a warning when trying to use Cypress.env() with disallowCypressEnv=false', {
    project: 'disallow-cypress-env',
    configFile: 'cypress-without-disallow-cypress-env.config.ts',
    snapshot: true,
    expectedExitCode: 0,
    browser: 'electron',
    async onRun (exec) {
      const res = await exec()

      // verify the error actually exists within the stdout in addition to a snapshot
      expect(res.stdout).to.contain('The use of Cypress.env() is deprecated and will be removed in a future major version of Cypress')
      expect(res.stdout).to.contain('Cypress recommends migrating to the cy.env() command and enabling disallowCypressEnv within your Cypress configuration.')
      expect(res.stdout).to.contain('The use of Cypress.env() will warn and throw an error when disallowCypressEnv is explicitly set to true.')
      expect(res.stdout).to.contain('Read our Migration Guide for the disallowCypressEnv configuration option, why Cypress.env() is deprecated, and how to migrate to cy.env(): https://on.cypress.io/cypress-env-migration.')
    },
  })
})
