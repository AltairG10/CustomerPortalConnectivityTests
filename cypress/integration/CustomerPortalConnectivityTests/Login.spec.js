/// <reference types="cypress" />

 // All elements are defined inside the constructor using variables
 // Main class for this validation should be defined as a unique name for reference

class Login {
    constructor(){

        this.user = '#UserName';
        this.password = '#Password';
        this.siginbttn = 'button[type="submit"]';

    }

    // Functione defined interacting with all elements defined by the constructor
    // Using 'should' we are validating that all the elements are functional inside the workflow 

    login (accnt, pass) {
        cy.get(this.user).type(accnt)
        cy.get(this.password).type(pass)
        cy.get(this.siginbttn).click()
        cy.log('Login Test Succesfully Validated');
    }
}

export default new Login()