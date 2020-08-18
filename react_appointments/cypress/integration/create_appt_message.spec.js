describe('Create a message', () => {
  it('Displays the message', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="messageText"]').type('New Message');

    cy.get('[data-testid="submitButton"]').click();

    cy.get('[data-testid="messageText"]').should('have.value', '');

    cy.contains('New message');
  });
});
