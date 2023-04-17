describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')

     })

    it('verifica mensagens validacao', () => {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage','Email is required!').should('be.visible');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage','User name is required!').should('be.visible');
        cy.contains('ap-vmessage','Password is required!').should('be.visible');
        cy.contains('ap-vmessage','Full name is required!').should('be.visible');

    })

    it('verifica mensagem de email invalida', () => {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname ="email"]').type('barbara');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');

    })

    it('Verifica mensagem de senha de 8 caracteres', () => {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname ="password"]').type('123');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');

    })

    it('Verifica mensagem de senha passando o número máximo', () => {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname ="password"]').type('123456789123456');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 18').should('be.visible');

    })

    it('Verifica mensagem de que o nome do usuário deve estar escrito em minúsculo', () => {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname ="userName"]').type('TESTANDONOME');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');

    })

    it('Verifica mensagem de caracter mínimo no nome do usuário', () => {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname ="userName"]').type('t');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');

    })

    it('Verifica mensagem de caracter máximo no nome do usuário', () => {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname ="userName"]').type('gkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage', 'Maximun length is 30').should('be.visible');

    })


    
})