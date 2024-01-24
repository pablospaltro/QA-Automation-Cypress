/*
In this exercise, we are going to use Cypress to automate the process
of logging into a website. So, we will interact with input fields, 
buttons, and labels to verify the successful login. 
*/

context('logging exercise', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    
    it('Test #1', () =>{
        //typing username:
        cy.get('.form-control,.text').type("user");
        //typing password:
        cy.get('.form-control,.password').type("pwd");
 
        // clicking on Log In button:
        cy.contains('Log In').click();

        // validate the successful login message is present:
        cy.contains('Welcome, user!').should('be.visible');
    })  
})

