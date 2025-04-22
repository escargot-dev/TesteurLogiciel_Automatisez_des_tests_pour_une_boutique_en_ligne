/// <reference types="cypress" />

describe('test api', function() {
  this.beforeEach(function() {
    cy.apiLogin();  
  });

  it('PUT specific available product in the cart',function(){
    cy.get('@authToken').then((token) => {
      cy.request({
        method: "PUT", 
        url: 'http://localhost:8081/orders/add',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          "quantity": 1,
          "product": 6
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        const expectedProduct = {
          "name": "Dans la forêt",
          "description": "La mousse riche et onctueuse nettoie en profondeur en laissant votre peau douce et hydratée.",
          "price": 24,
          "picture": "https:\/\/cdn.pixabay.com\/photo\/2015\/01\/06\/02\/56\/soap-589824_960_720.jpg"
        };
        expect(response.body.orderLines[0].product).to.include(expectedProduct);
      });  
    });
  });

  it('PUT specific out of stock product in the cart', function(){
    cy.get('@authToken').then((token) => {
      cy.request({
        method: "PUT",
        url: 'http://localhost:8081/orders/add',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          "quantity": 1,
          "product": 4
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        const expectedProduct = {
          "name": "Chuchotements d'été",
          "description": "Savon surgras à l'huile d'olive, particulièrement utile contre la peau sèche.",
          "price": 37,
          "picture": "https://cdn.pixabay.com/photo/2017/09/07/19/43/soap-2726387_960_720.jpg"
        };
        expect(response.body.orderLines[1].product).to.include(expectedProduct);
      });
    });
  });

});