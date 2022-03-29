/// <reference types="cypress" />

 // All elements are defined inside the constructor using variables
 // Main class for this validation should be defined as a unique name for reference in main class

class AppMessageService {
   
    constructor(){

        this.app_message = '.altair-contact-message-button';
        this.page_title = '#page-title';
        this.user1_message = '#message > .ng-binding';
        this.user2_link = '.ng-scope:nth-child(2) > span > .ng-binding';
        this.user2_message = '.ng-scope:nth-child(2) > div > #message > .ng-binding';
        this.user_message = '.ng-scope:nth-child(3) #message > .ng-binding';

    }

    // Function defined will interact with all elements defined by the constructor
    // Using 'should' we are validating that all the elements are functional inside the workflow 

    appMessageValidation(){
        cy.get(this.app_message).click()
        cy.get(this.page_title).should('exist');
        //cy.get(this.user1_message, {timeout:10000}).should('exist');
        cy.get(this.user2_link).click();
        cy.get(this.user2_message).should('exist');
        cy.get(this.user_message).should('exist');
        cy.log('App Message Test Succesfully Validated');

    }

}

export default new AppMessageService()