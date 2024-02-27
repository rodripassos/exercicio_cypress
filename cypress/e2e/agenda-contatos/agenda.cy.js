/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 contatos', () => {        
        cy.get('.sc-beqWaB').should('have.length', 3)
    })

    it('Deve preencher as informações e fazer a inclusão de novo contato', () => {
        cy.get('[type="text"]').type('Rodrigo Passos')
        cy.get('[type="email"]').type('rodrigo@teste.com')
        cy.get('[type="tel"]').type('11 999999999')
        cy.get('.adicionar').click()

        cy.get('.sc-beqWaB').should('have.length', 4)
    })

    it('Deve alterar o novo contato inserido na agenda', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').should('have.value','Rodrigo Passos')
        cy.get('[type="email"]').should('have.value','rodrigo@teste.com')
        cy.get('[type="tel"]').should('have.value','11 999999999')

        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Nome alterado')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('emailalterado@teste.com')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('00 000000000')
        cy.get('.alterar').click()
        
        cy.get('.sc-beqWaB').should('have.length', 4)
    })

    it('Deve excluir o novo contato inserido na agenda', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('.sc-beqWaB').should('have.length', 3)
    })
})