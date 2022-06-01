/// <reference types="Cypress" />

describe('Form Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/forms');
  });

  it('Form Testing', () => {
    cy.get('#title').contains('Forms');
    cy.get('#name').type('Test');
    cy.get('#email').type('hello@gmail.com');
    cy.get('#phone').type('1234567890');
    // cy.get('#date').type('2020-01-01');
    cy.get('#select-box').select('option2');

    cy.get('#checkbox-flex  input').check(['checkbox2', 'checkbox3'], {
      force: true,
    });
    cy.get('#date-picker').click();
    cy.get('.ant-picker-content tbody tr:nth-child(2)').click();
    cy.get('#text-area').type('Sample text area ');
    // cy.get('#form-submit-btn').click();
    cy.get('#chakra-form').submit();
  });
});
