describe('alura busca cursos', () =>{

    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de go', () =>{
        cy.get('#header-barraBusca-form-campoBusca').type('go');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome')
            .should('contain', 'Formação Go: a linguagem de programação do Google');
    })





})