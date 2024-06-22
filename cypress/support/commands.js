Cypress.Commands.add('login', (email, password) => { 
    cy.viewport(1080, 1920);    
    cy.get('#username').type(email);
    cy.get('#password').type(password);
    cy.get('input[value="Login"]').click();
    cy.get('.woocommerce-MyAccount-content').should('contain', 'Hello');
    cy.contains('Sign out').click();

 })

 Cypress.Commands.add('cadastro', (email, password) => { 
    cy.viewport(1080, 1920);    
    cy.get('#reg_email').type(email);
    cy.get('#reg_password').type(password);
    cy.get('input[value="Register"]').click();
    cy.get('.woocommerce-MyAccount-content').should('contain', 'Hello');
    cy.contains('Sign out').click();

  })

 
