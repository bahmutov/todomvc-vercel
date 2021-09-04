/// <reference types="cypress" />

it('works', () => {
  cy.visit('/')
  // application starts with 3 todos
  cy.get('.todo').should('have.length', 3)
  cy.get('[data-cy=new-todo]').type('Add tests!{enter}')
  cy.get('.todo')
    .should('have.length', 4)
    .eq(3)
    .should('include.text', 'Add tests!')

  cy.contains('.todo', 'Learn about React')
    .contains('[data-cy=complete]', 'Complete')
    .click()
  cy.contains('.todo', 'Learn about React').find('[data-cy=remove]').click()
  cy.get('.todo').should('have.length', 3)
  cy.contains('.todo', 'Learn about React').should('not.exist')
})
