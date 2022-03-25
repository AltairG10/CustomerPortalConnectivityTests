/// <reference types="cypress" />

class Login {
    constructor(){

        this.user = '#UserName';
        this.password = '#Password';
        this.siginbttn = 'button[type="submit"]';

    }

    login (accnt, pass) {
        cy.get(this.user).type(accnt)
        cy.get(this.password).type(pass)
        cy.get(this.siginbttn).click()
    }
}

export default new Login()