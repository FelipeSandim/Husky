import auxiliar from "../auxiliares/auxiliar"
const aux = new auxiliar

export default class loginPage{

    Url = 'https://demo.filamentphp.com/login';
    clickLogin = '.fi-btn';
    LogoHomePage = '.fi-sidebar-header';

    navegarNoSite() {
        aux.acessarUrl(this.Url);
    }
    botaoLogin() {
        aux.click(this.clickLogin);
    }

}