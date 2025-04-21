/// <reference types="cypress" />

describe('connexion testing', () => {

  it('test connexion avec identifiants valides', () => {
    cy.visit('http://localhost:8080/#/login');
    cy.getBySel('nav-link-login').click();
    cy.getBySel('login-form').should('exist');
    cy.getBySel('login-input-username').type('test2@test.fr');
    cy.getBySel('login-input-password').type('testtest');
    cy.getBySel('login-submit').click();
    cy.getBySel('nav-link-cart').should('be.visible').should('contain', 'Mon panier');
    cy.get('[data-cy="nav-link-logout"]').should('be.visible').should('contain', 'Déconnexion').click();
  });
});