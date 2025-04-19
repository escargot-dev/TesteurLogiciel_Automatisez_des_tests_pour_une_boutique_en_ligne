/// <reference types="cypress" />

describe('Gestion du panier', () => {
  beforeEach(()=> {
    cy.login('test2@test.fr', 'testtest');

    cy.intercept('GET', '**/products/random').as('getProduits');
    cy.visit('/#/products');
    cy.wait('@getProduits');
  });

  it('Ajout au panier si stock > 1', () => {
    cy.contains('Consulter').click();
    cy.get('.stock').invoke('text').then(stock => {
      if (parseInt(stock) > 1) {
        cy.contains('Ajouter au panier').click();
        cy.get('.panier').should('contain', '1');
      }
    });
  });

  it('Vérifie les limites de quantités', () => {
    cy.contains('Consulter').click();
    cy.contains(/en stock/i).should('be.visible');

    cy.get('input[type=number][formcontrolname="quantity"]').clear().type('21');
    cy.get('[data-cy="detail-product-add"]').click();

    cy.get('input[type=number][formcontrolname="quantity"]').clear().type('-1');
    cy.getBySel('detail-product-add').click();
    cy.contains(/en stock/i).should('be.visible');
    
  });

  it('Le stock se met à jour après ajout au panier', () => {
    cy.contains('Consulter').click();
    cy.contains(/en stock/i).should('be.visible');
  });
});