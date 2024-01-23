AudioContext('Variables', () =>{
    beforeEach(() => {
        cy.visit('/');
        cy.fixture("todos").as("todos");
    })

    it('Test 01', () =>{

        cy.get('.new-todo').type("Something...{enter}");
        cy.get('.todo-list li').as(items);
        
        cy.get('@items').should('have.length', 3);
        cy.get('.todo-list li').should('have.length', 3); 
    });

    it('Test 02', () =>{

        cy.get('@todos').then(todos => {
            todos.todos.forEach(todo => {
                cy.get('.new-todo').type(todo + "{enter}");
            });
        });
    });
})