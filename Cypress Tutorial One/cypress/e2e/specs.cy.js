it('my first test', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/')
    cy.get('#entry_217836 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('camera{enter}')
    cy.get('#entry_217836 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').clear()
    cy.get('#entry_217836 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input').type('laptops{enter}')




    /* ==== Generated with Cypress Studio ==== */
    cy.get('#entry_217827 > .icon-left > .icon > svg').click();
    cy.get('#widget-navbar-217841 > .navbar-nav > :nth-child(3) > .icon-left > .info > .title').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(':nth-child(1) > .product-thumb > .caption > .title > .text-ellipsis-2').click();
    cy.get('#entry_216842 > .text').click();
    cy.get('.form-row > :nth-child(2) > .btn').click();
    cy.get('#input-payment-firstname').clear('O');
    cy.get('#input-payment-firstname').type('Oluwatosin');
    cy.get('#input-payment-lastname').clear('A');
    cy.get('#input-payment-lastname').type('Ajao');
    cy.get('#input-payment-email').clear('o');
    cy.get('#input-payment-email').type('olutosinajao@gmail.com');
    cy.get('#input-payment-telephone').clear('0');
    cy.contains('Telephone').type('+2347033102077');
    cy.get('#input-payment-password').clear('V');
    cy.get('#input-payment-password');
    //should('exist') // Make sure the element exists, even if it's invisible
    //.invoke('show') // Use 'invoke' to set the CSS 'display' property to 'block' to make it visible
    //cy.get('#input-payment-password')
    //.should('be.visible') // Check if it's visible
    //.should('have.text', 'This element is invisible') // Verify its text
    /*cy.get('#invisibleElement').type('Victoria2077') //Input Password
    cy.get('#input-payment-confirm').clear('V');
    cy.contains('Password Confirm').type('Victoria2077');
    cy.get('#input-payment-company').clear('A');
    cy.get('#input-payment-company').type('Arca Payments');
    cy.get('#input-payment-address-1').clear('5');
    cy.get('#input-payment-address-1').type('5A, Furo Ezimora');
    cy.get('#input-payment-city').clear('L');
    cy.get('#input-payment-city').type('Lagos');
    cy.get('#input-payment-postcode').clear('1');
    cy.get('#input-payment-postcode').type('100282');
    cy.get('#input-payment-country').select('156');
    cy.get('#input-payment-zone').select('2412');
    cy.get('#input-comment').click();
    cy.get(':nth-child(4) > .custom-control-label').click();
    cy.get('#input-account-agree').check();
    cy.get(':nth-child(6) > .custom-control-label').click();
    cy.get('#input-agree').check();
    cy.get('#button-save').click();
    cy.get('#button-confirm').click();
    cy.get('.buttons > .btn').click();*/
    /* ==== End Cypress Studio ==== */
});
      
      

