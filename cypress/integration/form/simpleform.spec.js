/// <reference types="Cypress" />

describe('Form Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Form Testing', () => {
    cy.viewport(1280, 720);
    cy.contains('Forms').click();
    // working with URL
    cy.url().should('include', '/forms');
    // check text
    cy.contains('Form Submitted').should('not.exist');

    cy.get('#title').contains('Forms').should('exist');
    // typing name
    cy.get('#name').type('Test');
    cy.get('#email').type('hello@gmail.com');
    cy.get('#phone').type('1234567890');
    // cy.get('#date').type('2020-01-01');
    cy.get('#select-box').select('option2');

    cy.get('#checkbox-flex  input').check(['checkbox2', 'checkbox3'], {
      force: true,
    });
    cy.get('#date-picker').click();
    cy.get('.ant-picker-content tbody tr:nth-child(2) td:nth-child(3)').click();
    cy.get('#text-area').type('Sample text area ');
    // cy.get('#form-submit-btn').click();
    cy.get('#chakra-form').submit();
    cy.log('FORM SUBMITTED');
    cy.contains('Form Submitted' , {timeout : 1000}).should('exist');

    cy.url().then((data) => {
      cy.log(data);
    });
    //
    // cy.go('back');
  });

  // it('tab switching', () => {
  //   for (let i = 0; i < 10; i++) {
  //     cy.get(`[data-testid="tab-${i}"]`).click();
  //     cy.wait(600);
  //   }
  // });
});
