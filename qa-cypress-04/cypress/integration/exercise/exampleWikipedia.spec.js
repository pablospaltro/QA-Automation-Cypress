context('Wikipedia', () => {
    beforeEach(() => {

        // for running this, change the baseUrl to https://www.wikipedia.org/ !!!
        cy.visit('/');
    })

    
    it('Test 01 - BDD Expectations', () =>{

        cy.get('#www-wikipedia-org #searchInput').type("Globant {enter}");

        // more than one image uses this class, so with eq(0) we get the first one: 
        cy.get(".infobox img").eq(0).should("be.visible");

        cy.get(".mediawiki #firstHeading").should("be.visible");

        cy.get(".mediawiki #firstHeading").should("contain", "Globant");
        
    })  

    it('Test 02 - Implicit Wait', () =>{

        cy.get('#www-wikipedia-org #searchInput').type("Globant {enter}");

        // establishing a specific timeout (not recommended):
        cy.wait(6000);

        cy.get(".mediawiki #firstHeading").should("be.visible");
        
        cy.get(".mediawiki #firstHeading").should("contain", "Globant");
        
    })
})