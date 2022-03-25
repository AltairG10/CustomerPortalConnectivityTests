/// <reference types="cypress" />


class DocLibrary {
    constructor(){

        this.doc_link = 'i[class="fas fa-file-alt"]';
        this.page_title = '#page-title';
        this.policy1 = '.card:nth-child(4) .ng-scope:nth-child(2) > td > .ng-binding';
        this.policy2 = '.card:nth-child(4) .ng-scope:nth-child(1) > td > .ng-binding';

    }

    policyValidation(){
        cy.get(this.doc_link).click()
        cy.get(this.page_title).should('exist');
        cy.get(this.policy1).should('exist');
        cy.get(this.policy2).should('exist');
        cy.log('Document Policy Test succesfully Validated');

    }
}

export default new DocLibrary()