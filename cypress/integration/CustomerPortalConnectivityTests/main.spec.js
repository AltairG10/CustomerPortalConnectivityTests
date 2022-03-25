/// <reference types="cypress" />

import open from './Login.spec.js'
import doc from './DocLibrary.spec.js'

const URL = 'https://stg-client.altairglobal.com//Account/Login?ReturnUrl=%2F';
const accnt = 'bublem';
const pass = 'Altair2021';

describe('Customer Portal Login', () => {

    beforeEach(() => {
        cy.visit(URL);
 
    })

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

        doc.policyValidation()

    })

})