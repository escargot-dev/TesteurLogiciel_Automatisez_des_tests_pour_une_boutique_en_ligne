/// <reference types="cypress" />

describe('Ajouter un avis', () => {
  before(()=> {
    cy.apiLogin();  
  });

  it("verifier les chapms de formulaire d'avis",()=>{
    cy.visit('http://localhost:8080/#/');
    cy.getBySel('nav-link-reviews').click();

    cy.request({
      method: 'GET',
      url: `http://localhost:8081/riviews`,
      
      failOnStatusCode:false
    }).its('status').should('eq', 404);

    cy.contains('Connectez-vous pour ajouter un avis.').should('be.visible');

    cy.get('[data-cy="nav-link-register"]').click();

  });


});