'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">educamus-front documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-7e6d1cdbfa90573082916aaa135ee9e5d74c4bf7d75f7fe6c8fc4d6dda911ad91c113a190855e15be06601cd9ffebdb5a4548a8ad426ab7432816fff171136ec"' : 'data-target="#xs-components-links-module-AppModule-7e6d1cdbfa90573082916aaa135ee9e5d74c4bf7d75f7fe6c8fc4d6dda911ad91c113a190855e15be06601cd9ffebdb5a4548a8ad426ab7432816fff171136ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7e6d1cdbfa90573082916aaa135ee9e5d74c4bf7d75f7fe6c8fc4d6dda911ad91c113a190855e15be06601cd9ffebdb5a4548a8ad426ab7432816fff171136ec"' :
                                            'id="xs-components-links-module-AppModule-7e6d1cdbfa90573082916aaa135ee9e5d74c4bf7d75f7fe6c8fc4d6dda911ad91c113a190855e15be06601cd9ffebdb5a4548a8ad426ab7432816fff171136ec"' }>
                                            <li class="link">
                                                <a href="components/AlertasComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertasComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CadastroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CadastroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatAlunoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatAlunoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatProfComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatProfComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicioComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InicioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MateriaDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MateriaDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MateriaEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MateriaEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MateriasEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MateriasEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilAlunoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilAlunoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilProfComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilProfComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostagemDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostagemDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostagemEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostagemEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RodapeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RodapeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Postagem.html" data-type="entity-link" >Postagem</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tema.html" data-type="entity-link" >Tema</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLogin.html" data-type="entity-link" >UserLogin</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertasService.html" data-type="entity-link" >AlertasService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostagemService.html" data-type="entity-link" >PostagemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TemaService.html" data-type="entity-link" >TemaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});