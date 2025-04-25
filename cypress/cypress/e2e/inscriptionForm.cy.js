/// <reference types="cypress" />

describe('inscription Form Cypress', ()=> {
  beforeEach("ajouter d'avis" , function(){
    cy.visit('http://localhost:8080/#/register');
    cy.fixture('inscriptionForm.json').then(formulaire=>{
      this.formulaire=formulaire
    })
  });
  it('verifier les informations du formulaire',()=>{
    cy.get('[data-cy="register-input-lastname"]').should('be.visible');
    cy.get('[data-cy="register-input-firstname"]').should('be.visible');
    cy.get('[data-cy="register-input-email"]').should('be.visible');
    cy.get('[data-cy="register-input-password"]').should('be.visible');
    cy.get('[data-cy="register-input-password-confirm"]').should('be.visible');
    cy.get('[data-cy="register-submit"]').should('be.visible');
    cy.get('[data-cy="register-submit"]').should('contain.text',"S'inscrire");
  }); 

  it('remplir et soumettre le formulaire avec des données',function(){
    cy.get('[data-cy="register-input-lastname"]').type(this.formulaire.lastname);
    cy.get('[data-cy="register-input-firstname"]').type(this.formulaire.firstname);
    cy.get('[data-cy="register-input-email"]').type(this.formulaire.email);
    cy.get('[data-cy="register-input-password"]').type(this.formulaire.plainPassword.first);
    cy.get('[data-cy="register-input-password-confirm"]').type(this.formulaire.plainPassword.second);

    cy.get('[data-cy="register-submit"]').click();

    //cy.get('[data-cy="register-errors"]').should('be.visible').should('contain', 'Cette adresse mail est déjà  utilisée');

  });

});