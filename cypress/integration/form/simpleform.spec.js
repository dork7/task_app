/// <reference types="Cypress" />

describe('Form Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.viewport(1280, 720);
  });

  // it('tab switching', () => {
  //   for (let i = 0; i < 10; i++) {
  //     cy.get(`[data-testid="tab-${i}"]`).click();
  //     cy.wait(600);
  //   }
  // });

  it.only('Form Testing', () => {
    cy.fixture('example.json').then((data) => {
      cy.log(data);

      cy.contains('Forms').click();
      // working with URL
      cy.url().should('include', '/forms');
      // check text
      cy.contains('Form Submitted').should('not.exist');

      cy.get('#title').contains('Forms').should('exist');
      // typing name
      cy.get('#name').type(data.name);
      cy.get('#email').type(data.email);
      cy.get('#phone').type(data.phone);
      // cy.get('#date').type('2020-01-01');
      cy.get('#select-box').select('option2');

      cy.get('#checkbox-flex  input').check(['checkbox2', 'checkbox3'], {
        force: true,
      });
      cy.get('#date-picker').click();
      cy.get(
        '.ant-picker-content tbody tr:nth-child(2) td:nth-child(3)'
      ).click();
      cy.get('#text-area').type('Sample text area ');
      // cy.get('#form-submit-btn').click();
      cy.get('#chakra-form').submit();
      cy.log('FORM SUBMITTED');
      cy.contains('Form Submitted', { timeout: 1000 }).should('exist');

      cy.url().then((data) => {
        cy.log(data);
      });
      //
      // cy.go('back');
    });
  });
});
