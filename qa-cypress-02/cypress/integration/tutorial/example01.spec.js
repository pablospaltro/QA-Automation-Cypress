context('example 01', () => {
    beforeEach(() => {
        // navigate to the baseUrl,
        // appending what's inside the parameter:
        cy.visit('/');
    })

    //test case
    it('Test #1', () =>{
        // getting an element with a certain locator, or alias name
        // .get --> using css locator (class)
        // .type --> the text and press the key {enter}
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.new-todo').type("My long task #2{enter}");

        // .contains --> getting an element by its text
        // .click --> adding an aditional action afterwards 
        cy.contains('Completed').click();
        cy.contains('Active').click();
    })

    it('Test #2: Select using CSS selectors', () =>{
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.new-todo').type("My long task #2{enter}");

        // gets the second task on the todo list (the second child):
        cy.get(':nth-child(2) > .view > .toggle').click(); 
        cy.contains('Completed').click();
    })

    it('Test #3: Select using Text Content', () =>{
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.new-todo').type("My long task #2{enter}");
        
        // .parent() allows us to go from a child to its parent
        cy.get('label:contains("My long task #1")').parent().find('.toggle').click(); 
        cy.contains('Completed').click();
    })  
    
    it('Test #4: Assertions', () =>{
        cy.get('.todo-list li').should('have.length', 2);
        cy.get('.new-todo').type("My long task #1{enter}");
        cy.get('.todo-list li').should('have.length', 3);
        
        cy.get('label:contains("My long task #1")').parent().find('.toggle').click();
        cy.get('label:contains("My long task #1")').parent().parent().should('have.class', 'completed');

        cy.get('label:contains("Walk the dog")').parent().parent().should('have.class', 'completed');
    });

    it('Test #5: Reversing the default assertion', () =>{
        cy.get('button.close').should('not.exist');
        cy.get('button.close');

    });
})