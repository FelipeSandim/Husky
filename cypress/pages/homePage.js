import auxiliar from "../auxiliares/auxiliar"
const aux = new auxiliar

export default class homePage{

    Url = 'https://demo.filamentphp.com'
    clicarMenu = '.fi-topbar-open-sidebar-btn'
    btnPost = 'body > div.fi-layout.flex.min-h-screen.w-full.flex-row-reverse.overflow-x-clip > aside > nav > ul > li:nth-child(3) > ul > li:nth-child(1) > a'
    btnNewPost = '.fi-ac > .fi-btn'
    titleText = '#data\\.title'
    text = '.CodeMirror'
    author = ':nth-child(4) > .fi-fo-field-wrp > :nth-child(1) > .justify-between > .fi-fo-field-wrp-label > .text-sm'
    textoAuthor = '#form > div.grid.grid-cols-\\[--cols-default\\].lg\\:grid-cols-\\[--cols-lg\\].fi-fo-component-ctn.gap-6 > div:nth-child(1) > section > div > div > div > div:nth-child(4) > div > div > div.grid.gap-y-2 > div > div > div > div > div.choices__list.choices__list--dropdown > input'
    authorSelect = '#choices--datablog_author_id-item-choice-1'
    category = ':nth-child(5) > .fi-fo-field-wrp > :nth-child(1) > .justify-between > .fi-fo-field-wrp-label > .text-sm'
    textoCategory = '#form > div.grid.grid-cols-\\[--cols-default\\].lg\\:grid-cols-\\[--cols-lg\\].fi-fo-component-ctn.gap-6 > div:nth-child(1) > section > div > div > div > div:nth-child(5) > div > div > div.grid.gap-y-2 > div > div > div > div > div.choices__list.choices__list--dropdown.is-active > input'
    categorySelect = '#choices--datablog_category_id-item-choice-1'
    createBtn = '.fi-ac > .fi-color-custom'
    campoBusca = '#input-1'


    menu(){
        aux.click(this.clicarMenu)
    }
    clicPost(){
        aux.click(this.btnPost)
    }
    clicNewPosts(){
        aux.click(this.btnNewPost)
    }
    selectTitle(){
        aux.clickForce(':nth-child(1) > .fi-fo-field-wrp > :nth-child(1) > .justify-between > .fi-fo-field-wrp-label > .text-sm')
    }
    preencherTitle(){
        aux.preencherCampoInvisivel(this.titleText, 'Homer Simpson')
    }
    selectText(){
        aux.clickForce('.CodeMirror-line')
    }
    preencherText(){
        aux.preencherCampoInvisivel(this.text, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')    
    }
    clicAuthor(){
        aux.clickDropDown(this.author)
    }
    textAuthor(){
        aux.searchDropDow(this.textoAuthor, 'a')
    }
    clicauthorSelect(){
        aux.clickElementDropDown(this.authorSelect)
    }
    clicCategory(){
        aux.clickDropDown(this.category)
    }
    textCategory(){
        aux.searchDropDow(this.textoCategory, 'a')
    }
    clicCategorySelect(){
        aux.clickElementDropDown(this.categorySelect)
    }
    clicCategorySelect(){
        aux.clickForce(this.categorySelect)
    }
    clicCreate(){
        aux.clickForce(this.createBtn)
    }
    clickBusca(){
        aux.clickForce(this.campoBusca)
    }
    buscaPost(){
        aux.preencherCampoInvisivel(this.campoBusca, 'Homer')
    }


}