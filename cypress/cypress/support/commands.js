// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getBySel', (selector, ...args) => {
  return cy.get(`[data-cy="${selector}"]`, ...args);
});

Cypress.Commands.add('login', (username, password) => {
  cy.visit('http://localhost:8080/#/');

  cy.getBySel('nav-link-login').click();

  
  cy.getBySel('login-input-username').should('not.be.disabled').clear().type(username);
  cy.getBySel('login-input-password').should('not.be.disabled').clear().type(password);

  cy.getBySel('login-submit').click();

  cy.url().should('include', '/#/');
});

Cypress.Commands.add('apiLogin', () => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8081/login',
    body: {
      username: 'test2@test.fr',
      password: 'testtest'
    }
  }).then((resp) => {
    const token = resp.body.token;
    window.localStorage.setItem('token', token);
    cy.wrap(token).as('authToken');
  });
});

Cypress.Commands.add('getFirstProduct', (token) => {
  return cy.request({
    method: 'GET',
    url: 'http://localhost:8081/products',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.body[0]);
});