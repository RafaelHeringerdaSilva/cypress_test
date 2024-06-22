import {massas} from '../fixtures/massas.json';

describe('Cadastrar e logar no site do desafio', ()=>{
    beforeEach(()=>{        
        //acessa a URL
        cy.visit('https://practice.automationtesting.in/')      
        //maximizar, pág resposiva
        cy.viewport(1080, 1920);  
        cy.contains('My Account').should('be.visible').click()   
        //ignora erros que não fazem parte do teste (anúncios não carregam)
        Cypress.on('uncaught:exception', (err, runnable) => {            
            return false;
         });     
    })
    //aplica o json para testes
    massas.forEach((massa, index) => {      
        //cadastra massa
        it(`Cadastrar - Teste ${index}`, () => {
            cy.cadastro(massa.email, massa.password);    
        });
        //login com massa    
        it(`Login - Teste ${index}`, () => {
            cy.login(massa.email, massa.password);   
        });
    });    
});