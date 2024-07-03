


export default class auxiliar {

    acessarUrl(element) {
        cy.visit(element)
    }
    click(element) {
      cy.get(element).click();
  }
    
     clickForce(elemet){ 
        cy.get(elemet).click({force:true}) 
     }
    
     preencherInput(element, text){ 
        cy.get(element).type(text)
     }
    
     preencherInputForce(element, text){ 
        cy.get(element).type(text, {force:true})
     }

     preencherCampoInvisivel(element, text){
      cy.get(element).scrollIntoView().should('be.visible').type(text)
     }
     
     tempo(tempo){ 
        cy.wait(tempo) 
     }
    
     clickDropDown(element){
      cy.get(element).scrollIntoView().click({ force: true });
     }

     searchDropDow(element, text){
      cy.get(element).type(text, { force: true })
     }

     clickElementDropDown(element){
      cy.get(element).first().click({ force: true });
     }
    
     validarText(element, text){ 
        cy.get(element).should('contain', text) 
     }

     validarElemento(element){ 
      cy.get(element).should('exist')
   }
    
}