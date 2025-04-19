/// <reference types="cypress" />
describe('API test', ()=>{

  it('should return 401 when accessing order without auth', ()=>{
    cy.request({
      method:'GET',
      url:'http://localhost:8081/orders',
      failOnStatusCode:false
    }).its('status').should('eq',401);
  });

  context('Avec authentification', () => {
    beforeEach(function () {
      cy.apiLogin();
    });

    it('should return a list of products in the order when authenticated', function () {
      cy.get('@authToken').then((token) => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:8081/orders',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then((response) => {
        expect(response.status).to.eq(200);
        });
      });
    });

    it('should return a specific product when requesting /products/{id}', function () {
      cy.get('@authToken').then((token) => {
        cy.getFirstProduct(token).then((product)=>{
          cy.request({
            method: 'GET',
            url: `http://localhost:8081/products/${product.id}`,
            headers: {
              Authorization: `Bearer ${token}`,
            },

          }).its('status').should('eq', 200);
        });
      });
    });


    
  });
});