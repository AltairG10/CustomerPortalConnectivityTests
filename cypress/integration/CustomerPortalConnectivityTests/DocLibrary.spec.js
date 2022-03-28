/// <reference types="cypress" />

 // All elements are defined inside the constructor using variables
 // Main class for this validation should be defined as a unique name for reference


class DocLibrary {
    constructor(){

        this.doc_link = 'i[class="fas fa-file-alt"]';
        this.page_title = '#page-title';
        this.policy1 = '.card:nth-child(4) .ng-scope:nth-child(2) > td > .ng-binding';
        this.policy2 = '.card:nth-child(4) .ng-scope:nth-child(1) > td > .ng-binding';

    }

    // Function defined interacting with all elements defined by the constructor
    // Using 'should' we are validating that all the elements are functional inside the workflow 

    policyValidation(){
        cy.get(this.doc_link).click()
        cy.get(this.page_title).should('exist');
        cy.get(this.policy1, {timeout:10000}).should('exist');
        cy.get(this.policy2).should('exist');
        cy.log('Document Policy Test succesfully Validated');

    }
}

export default new DocLibrary()