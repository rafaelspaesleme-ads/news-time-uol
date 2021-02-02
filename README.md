# Projeto News Time - UOL

Portal para exibição de noticias do Jornal The New York Times.

## Tecnologias envolvidas

- React Hooks
- React Router Dom
- Styled Component
- SASS
- CLSX
- Axios
- Material UI
- Google Fonts
- React Marquee Dwyer

## APIs utilizadas

- <a href='https://developer.nytimes.com/' >Api NyTimes Developer</a>
- <a href='https://documenter.getpostman.com/view/10808728/SzS8rjbc'>Api Covid 19</a>

## Componentes criados

- UolCardMobile
    - Componente de Card para exibição de noticias de Ciências e Tecnologia em modo de responsividade;
    - Propriedades deste componente:
        <table>
        <tr>
        <th>PROPS</th>
        <th>TYPE</th>
        <th>DEFAULT</th>
        </tr>
        <tr>
        <td>value</td>
        <td>object</td>
        <td>null</td>
        </tr>
        </table>
        
        
- UolCardPrincipal
    - Componente de Card para exibição de noticias de Ciências e Tecnologia em modo desktop
    - Propriedades deste componente:
        <table>
        <tr>
        <th>PROPS</th>
        <th>TYPE</th>
        <th>DEFAULT</th>
        </tr>
        <tr>
        <td>value</td>
        <td>object</td>
        <td>null</td>
        </tr>
        </table>
        
        
- UolCardSecondary
    - Componente de Card para exibição de dados secundarios do portal (para preenchimento e adequação funcional do portal)
    - Valido apenas para o modo Desktop
    - Propriedades deste componente:
        <table>
        <tr>
        <th>PROPS</th>
        <th>TYPE</th>
        <th>DEFAULT</th>
        </tr>
        <tr>
        <td>title</td>
        <td>string</td>
        <td>There is no news</td>
        </tr>
        <tr>
        <td>description</td>
        <td>string</td>
        <td>No comments</td>
        </tr>
        </table>
        
        
- UolContentModal
    - Componente para exibição de conteudos do modal
    - Valido apenas para o modo Desktop
    - Propriedaes deste componente:
        <table>
        <tr>
        <th>PROPS</th>
        <th>TYPE</th>
        <th>DEFAULT</th>
        </tr>
        <tr>
        <td>image</td>
        <td>string</td>
        <td><a href="https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png">IconUsername</a></td>
        </tr>
        <tr>
        <td>title</td>
        <td>string</td>
        <td>Untitled</td>
        </tr>
        <tr>
        <td>author</td>
        <td>string</td>
        <td>Without author</td>
        </tr>
        <tr>
        <td>tags</td>
        <td>array</td>
        <td>[ ]</td>
        </tr>
        <tr>
        <td>description</td>
        <td>string</td>
        <td>No comments</td>
        </tr>
        <tr>
        <td>url</td>
        <td>string</td>
        <td>empty</td>
        </tr>
        </table>
        
        
- UolFooter
    - Componente para exibição do rodapé da pagina
    - Propriedaes deste componente:
        <table>
        <tr>
        <th>PROPS</th>
        <th>TYPE</th>
        <th>DEFAULT</th>
        </tr>
        <tr>
        <td>idDocs</td>
        <td>string</td>
        <td>empty</td>
        </tr>
        <tr>
        <td>urlUsernameGithub</td>
        <td>string</td>
        <td>empty</td>
        </tr>
        <tr>
        <td>urlUsernameInstagram</td>
        <td>string</td>
        <td>empty</td>
        </tr>
        <tr>
        <td>urlUsernameLinkedin</td>
        <td>string</td>
        <td>empty</td>
        </tr>
        <tr>
        <td>nameDev</td>
        <td>string</td>
        <td>empty</td>
        </tr>
        </table>
        
        
- UolHeader
    - Componente para exibição do cabeçalho da pagina
    - Propriedaes deste componente:
        <table>
        <tr>
        <th>PROPS</th>
        <th>TYPE</th>
        <th>DEFAULT</th>
        </tr>
        <tr>
        <td>onClickTech</td>
        <td>function</td>
        <td>null</td>
        </tr>
        <tr>
        <td>onClickScience</td>
        <td>function</td>
        <td>null</td>
        </tr>
        <tr>
        <td>countNewsTech</td>
        <td>number</td>
        <td>0</td>
        </tr>
        <tr>
        <td>countNewsScience</td>
        <td>number</td>
        <td>0</td>
        </tr>
        <tr>
        <td>casesTotalCovid</td>
        <td>number</td>
        <td>0</td>
        </tr>
        <tr>
        <td>casesNewsCovid</td>
        <td>number</td>
        <td>0</td>
        </tr>
        <tr>
        <td>casesDeathCovid</td>
        <td>number</td>
        <td>0</td>
        </tr>
        <tr>
        <td>casesRecoveredCovid</td>
        <td>number</td>
        <td>0</td>
        </tr>
        <tr>
        <td>screen</td>
        <td>selection</td>
        <td>options["desktop", "smartphone", "tablet"]</td>
        </tr>
        </table>
        
        
- UolMarquee
    - Componente de marquee para exibição de noticias do dia
    - Propriedades deste componente:
        <table>
        <tr>
        <th>PROPS</th>
        <th>TYPE</th>
        <th>DEFAULT</th>
        </tr>
        <tr>
        <td>info</td>
        <td>array</td>
        <td>[ ]</td>
        </tr>
        <tr>
        <td>sequencyRandom</td>
        <td>booleano</td>
        <td>false</td>
        </tr>
        </table>
        
        
- UolMobileNotification
    - Componente de notificação em balão flutuante para alerta de covid 19 no modo de responsividade
    - Propriedades deste componente:
        <table>
        <tr>
        <th>PROPS</th>
        <th>TYPE</th>
        <th>DEFAULT</th>
        </tr>
        <tr>
        <td>casesTotalCovid</td>
        <td>number</td>
        <td>0</td>
        </tr>
        <tr>
        <td>casesNewsCovid</td>
        <td>number</td>
        <td>0</td>
        </tr>
        <tr>
        <td>casesDeathCovid</td>
        <td>number</td>
        <td>0</td>
        </tr>
        <tr>
        <td>casesRecoveredCovid</td>
        <td>number</td>
        <td>0</td>
        </tr>
        </table>


## Formatação do projeto

- Organização estrutural por componentização de funcionalidades;
- Organização de componentes em containers (e subcontainers);
- Organização de containers em paginas;
- Organização de serviços por separações de APIS: endpoints, objetos (funções por metodos Http) e autenticações;
- Estilização global com SASS;
- Estilização de componentes e containers com Styled Component;
- Biblioteca principal de estilização Material UI;
- Estilizações e layouts autonomos;
- Separação de arquivos de estilização global em assets/styles;

## Como executar e/ou buildar o projeto:

### `npm install ou yarn install`
- Para baixar todas as dependencias utilizadas no projeto

### `npm start ou yarn start`
- Executa o aplicativo no modo de desenvolvimento.
- Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

- A página será recarregada se você fizer edições.
- Você também verá quaisquer erros de lint no console.

### `npm build ou yarn build`
- Compila o aplicativo para produção na pasta `build`.
- Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

- A compilação é reduzida e os nomes dos arquivos incluem os hashes.
- Seu aplicativo está pronto para ser implantado!

- Consulte a seção sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.


## Informações uteis (en)

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
