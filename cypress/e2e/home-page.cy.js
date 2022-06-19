describe('Employees list api is get called and rendered', () => {
  it('verify that the api is get called at the first initiation and get bind to the view', () => {
    cy.intercept(
      {
        method: 'GET', // Route all GET requests
        url: 'https://fe-task.getsandbox.com/employees?page=1',
      },
    ).as('getEmployees');

    cy.visit('http://localhost:8080/');

    cy.wait('@getEmployees').then(interception => {
      assert.isNotNull(interception.response.body, 'Employees api called')
      cy.get('.c-users-list__body').should('have.length', interception.response.body.employees.length)
    })
  })
})


describe('Performance link is existed and valid', () => {
  it('Is Performance link exist', () => {
    cy.get('[href="/team-performance"]').should('be.visible');
  })

  it('Make issue of the Performance link name', () => {
    cy.get('[href="/team-performance"]').contains('Team performance chart page');
  })
})

describe('Load more is getting the nex page of the employees', () => {
  it('verify that the api is get called at the first initiation and get bind to the view', () => {
    cy.intercept(
      {
        method: 'GET', // Route all GET requests
        url: 'https://fe-task.getsandbox.com/employees?page=1',
      },
    ).as('getEmployees');

    cy.visit('http://localhost:8080/');

    cy.wait('@getEmployees').then(interception => {
      assert.isNotNull(interception.response.body, 'Employees api called')
      cy.get('.c-users-list__body').should('have.length', interception.response.body.employees.length)
    })
  })

  it('Verify api calling with the right parameter on load more click', () => {
    cy.intercept(
      {
        method: 'GET', // Route all GET requests
        url: 'https://fe-task.getsandbox.com/employees?page=2',
      },
    ).as('getEmployees');

    cy.get('#load-more-employees').click()

    cy.wait('@getEmployees').then(interception => {
      assert.isNotNull(interception.response.body, 'Employees api called')
      cy.get('.c-users-list__body').should('have.length', interception.response.body.employees.length + 20)
    })
  })
})
