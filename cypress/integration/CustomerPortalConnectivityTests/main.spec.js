/// <reference types="cypress" />

// import all classes from other modules

import open from './Login.spec.js'
import doc from './DocLibrary.spec.js'
import app from './AppMessageService.spec.js'
import arev from './ArevReplication.spec.js'

// Defining constant variables for Login, we should change this for a differents users
// if we want to test differents customers

const URL = 'https://stg-client.altairglobal.com//Account/Login?ReturnUrl=%2F';
const accnt = 'bublem';
const pass = 'Altair2021';

// Here is the main code for create, modify and execute tests

describe('Customer Portal Login', () => {

    // BeforeEach will always run the block of code inside before each "it" code block
    beforeEach(() => {
        cy.visit(URL);
 
    })

    // "it" always run a testcase
    it("Customer Portal Login Test", () => {
        open.login(accnt, pass);   
    })

})

describe('AG21 Document Library', () => {

    beforeEach(() => {
        cy.visit(URL);
        open.login(accnt, pass);  
 
    })

    it('Policy Document Library test', () => {

        doc.policyValidation();

    })

})

describe('App Message Service', () => {

    beforeEach(() => {
        cy.visit(URL);
        open.login(accnt, pass);  
 
    })

    it('App Message Service test', () => {

        app.appMessageValidation();

    })

})

describe('Arev Replication HomePage Load Service', () => {

    beforeEach(() => {
        cy.visit(URL);
        open.login(accnt, pass);  
 
    })

    it('Arev Load Service test', () => {

        arev.ArevsLoadValidation();

    })

})