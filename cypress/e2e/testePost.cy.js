
import auxiliar from "../auxiliares/auxiliar";
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
const home = new homePage
const login = new loginPage
const aux = new auxiliar

describe('login e criação de Post', () =>{
  it('teste para criar um poost', () =>{
    
    login.navegarNoSite()
    login.botaoLogin()
    aux.tempo(1000)
    home.clicPost()
    home.clicNewPosts()
    aux.tempo(1000)
    //home.selectTitle()
    aux.tempo(1000)
    home.preencherTitle()
    home.selectText()
    aux.tempo(1000)
    home.preencherText()
    home.clicAuthor()
    aux.tempo(1000)
    home.textAuthor()
    aux.tempo(2000)
    home.clicauthorSelect()
    aux.tempo(1000)
    home.clicCategory()
    aux.tempo(1000)
    home.textCategory()
    aux.tempo(2000)
    home.clicCategorySelect()
    home.clicCreate()
    aux.tempo(1000)
    home.clicPost()
    aux.tempo(2000)
    home.clickBusca()
    home.buscaPost()
  });
})