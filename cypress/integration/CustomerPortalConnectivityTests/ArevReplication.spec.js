/// <reference types="cypress" />


// All elements are defined inside the constructor using variables
 // Main class for this validation should be defined as a unique name for reference

 class ArevReplicationService {
     constructor(){

        this.logo = 'img[class="img-fluid"]';
        this.doc_librarylink = 'i[class="fas fa-file-alt"]';
        this.reimbursement_link = 'i[class="fas fa-money-check-alt"]';
        this.travel_requestlink = 'i[class="fas fa-plane"]';
        this.contact_name = '#AltairContactName';
        this.message_bttn = 'a[class="btn btn-primary altair-contact-message-button"]';
        this.reimbursement_request = ".flex-grow-1:nth-child(1) > strong";
        this.request_draft = ".flex-grow-1:nth-child(2) > strong";
        this.request_bttn = '#tourStop-reimbursementRequests';
        this.task_tab = "#Tasks-tab";
        this.view_tasks = 'a[href="/tasks"]';
        this.appmnt_tab = '#Appointments-tab > .blue-heading';
        this.appmnt_view = 'a[href="/calendar"]';
        this.learn_tab = 'i[class="fas fa-graduation-cap"]';
        this.plan_tab = 'i[class="fas fa-route"]';
        this.track_tab = 'i[class="fas fa-compass"]';

     }

     // Function defined interacting with all elements defined by the constructor
    // Using 'should' we are validating that all the elements are functional inside the workflow 

    ArevsLoadValidation(){

        cy.get(this.logo).should('exist');
        cy.get(this.doc_librarylink).should('exist');
        cy.get(this.reimbursement_link).should('exist');
        cy.get(this.travel_requestlink).should('exist');
        cy.get(this.contact_name).should('exist');
        cy.get(this.message_bttn).should('exist');
        cy.get(this.reimbursement_request).should('exist');
        cy.get(this.request_draft).should('exist');
        cy.get(this.request_bttn).should('exist');
        cy.get(this.task_tab).should('exist');
        cy.get(this.view_tasks).should('exist');
        cy.get(this.appmnt_tab).click();
        cy.get(this.appmnt_view).should('exist');
        cy.get(this.learn_tab).should('exist');
        cy.get(this.plan_tab).should('exist');
        cy.get(this.track_tab).should('exist');
        cy.log('Arev Load Test Succesfully Validated');
    }

 }

 export default new ArevReplicationService();