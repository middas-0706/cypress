exports['disallowCypressEnv / throws an error when trying to use Cypress.env() with disallowCypressEnv=true'] = `

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (disallow-cypress-env.cy.ts)                                               │
  │ Searched:   cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  disallow-cypress-env.cy.ts                                                      (1 of 1)


  disallowCypressEnv
    1) invokes Cypress.env()


  0 passing
  1 failing

  1) disallowCypressEnv
       invokes Cypress.env():
     CypressError: \`Cypress.env()\` does not work when \`disallowCypressEnv\` is set to \`true\`. Please migrate to \`cy.env()\` or leverage other stateful methods to manage variables.

https://on.cypress.io/cypress-env-migration
      [stack trace lines]




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     disallow-cypress-env.cy.ts                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /XXX/XXX/XXX/cypress/screenshots/disallow-cypress-env.cy.ts/disallowCypressEnv -    (2560x1440)
     - invokes Cypress.env() (failed).png                                                           


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  disallow-cypress-env.cy.ts               XX:XX        1        -        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     XX:XX        1        -        1        -        -  


`

exports['disallowCypressEnv / correctly prints a warning when trying to use Cypress.env() with disallowCypressEnv=false'] = `
The use of Cypress.env() is deprecated and will be removed in a future major version of Cypress.

Cypress recommends migrating to the cy.env() command and enabling disallowCypressEnv within your Cypress configuration.

The use of Cypress.env() will warn and throw an error when disallowCypressEnv is explicitly set to true.

Read our Migration Guide for the disallowCypressEnv configuration option, why Cypress.env() is deprecated, and how to migrate to cy.env(): https://on.cypress.io/cypress-env-migration.


====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    1.2.3                                                                              │
  │ Browser:    FooBrowser 88                                                                      │
  │ Specs:      1 found (disallow-cypress-env.cy.ts)                                               │
  │ Searched:   cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                                │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  disallow-cypress-env.cy.ts                                                      (1 of 1)


  disallowCypressEnv
    ✓ invokes Cypress.env()


  1 passing


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     X seconds                                                                        │
  │ Spec Ran:     disallow-cypress-env.cy.ts                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  disallow-cypress-env.cy.ts               XX:XX        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        XX:XX        1        1        -        -        -  


`
