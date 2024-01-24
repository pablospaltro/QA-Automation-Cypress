context('EjercicioWaits' , () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it("Implicit wait", () => {
        cy.get(".btn.btn-primary").click();
        cy.wait(25000);
        cy.get(".bg-success").should("have.text", "Data loaded with AJAX get request.");
    })

    it("BDD expectations - Explicit wait 1", () => {
        cy.get(".btn.btn-primary").click();
        cy.get(".bg-success", {timeout : 25000}).should("have.text", "Data loaded with AJAX get request.");
    })

    it("Service request wait", () => {
        cy.intercept("https://uitestingplayground.com/ajaxdata").as("request");
        cy.get(".btn.btn-primary").click();
        cy.wait("@request", {timeout : 25000}).its('response.statusCode').should('eq', 200)
        cy.get(".bg-success").should("have.text", "Data loaded with AJAX get request.");
    })
})