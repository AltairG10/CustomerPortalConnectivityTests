/// <reference types="cypress" />

import open from './Login.spec.js'

const URL = 'https://stg-client.altairglobal.com//Account/Login?ReturnUrl=%2F';
const accnt = 'bublem';
const pass = 'Altair2021';

describe('CustomerPortalLogin', () => {

    beforeEach(() => {
        cy.visit(URL);
        open.login(accnt, pass);   
    })

    it("CustomerPortalLoginTest", () => {
        cy.log('Test1')     
    })

})