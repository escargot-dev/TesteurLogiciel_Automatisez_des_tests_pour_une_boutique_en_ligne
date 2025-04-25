/// <reference types="cypress" />

describe('Ajouter un avis', () => {
  beforeEach(()=> {
    cy.apiLogin();  
  });

  it("verifier les chapms de formulaire d'avis",()=>{
    cy.visit('http://localhost:8080/#/');
    cy.getBySel('nav-link-reviews').click();

    cy.request({
      method: 'GET',
      url: `http://localhost:8081/reviews`,
      
      failOnStatusCode:false
    }).its('status').should('eq', 200);

    cy.get('[data-cy="review-form"]').should('exist');
    
    cy.contains('Connectez-vous pour ajouter un avis.').should('be.visible');
    

  });

  it('POST a review and test the XSS', () => {
    cy.get('@authToken').then((token) => {
      cy.request({
        method: "POST", 
        url: "http://localhost:8081/reviews",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          title: "test", 
          comment: "<script>alert('test')</script>", 
          rating: 5
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        
      });
    });
  });

});