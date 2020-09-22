## Rodando o projeto

Como o foco desta apresentação é demonstrar o uso do Stencil, para deixar mais simples, esse projeto não utiliza ferramentas para  gerenciar *monorepos* como o *lerna* por exemplo.

Portanto basta rodar `npm install && npm run build` no diretório `talk-components`, e `npm install && npm start` nos diretórios `angular-project` e `react-project`.

## Web Components

É a utilização de um conjunto de tecnologias nativas da web que juntas permitem a criação de elementos customizáveis, encapsulados e reutilizáveis.

 1. Custom Elements
 2. Shadow DOM
 3. HTML Templates

Na prática o uso de *web components* é muito similar às formas de componentização oferecidas pelo *React*, *Angular*, *Vue*, etc. Mas oferece um beneficio que é não depender de tecnologias que não são nativas da web permitindo assim utilizar o mesmo código em diversos projetos diferentes utilizando *frameworks* diferentes.

#### Custom Elements:

É um modo de criar *tags HTML* customizadas, normalmente a combinação de *tags* já existentes. A declaração de um novo *custom element* é feita através *API* `customElements.define()`.  A utilização de *custom elements* por si só não garante o encapsulamento, na verdade seria o mesmo que repetir a mesma estrutura de vários elementos`<div>` ao longo do código porém com uma lógica de *Javascript* associada a cada uma.

Material mais completo aqui:
https://developers.google.com/web/fundamentals/web-components/customelements

#### Shadow DOM:

De forma simples, o *shadow DOM* é uma forma encapsulada do DOM convencional e que pode ser atribuída à um elemento.  A estrutura presente no *shadow DOM* é renderizada separadamente do DOM principal e permite o desenvolvedor expor ou não seus elementos internos. Diferentemente do `<iframe>`, os *shadow DOM* pode ser acessado de dentro da aplicação a partir do `shadowRoot.querySelector()` entretanto elementos contidos no *shadow DOM* não poderão ser acessados por meio do`document.querySelector()`.


Material mais completo aqui:
https://ultimatecourses.com/blog/understanding-shadow-dom-in-web-components

Outros links uteis:
https://css-tricks.com/an-introduction-to-web-components/
https://developer.mozilla.org/pt-BR/docs/Web/Web_Components

#### HTML Templates:

A *tag* `<template>` serve para definir estruturas que não serão imediatamente renderizadas na página, mas podem ser futuramente utilizadas por algum *script*. Além da tag `<template>` ainda temos o `<slot>` que é utilizado para permitir que o usuário do *template* possa informar algum conteúdo dinâmico para ser exibido dentro do nosso componente.

Material mais completo aqui:
https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots

### Quem utiliza web components:
Apple: https://dev.to/ionic/apple-just-shipped-web-components-to-production-and-you-probably-missed-it-57pf

Firefox: https://briangrinstead.com/blog/firefox-webcomponents/

Salesforce: https://developer.salesforce.com/blogs/2018/12/introducing-lightning-web-components.html

Ionic: https://ionicframework.com/blog/introducing-ionic-4-ionic-for-everyone/

## Stencil

### O que é:

> Stencil é um compilador que gera *web components* e cria aplicativos
> web de alta performance. Stencil junta os melhores conceitos dos
> *frameworks* mais populares em uma simples ferramenta utilizada em *build time*.
> 
> Stencil utiliza funcionalidades como
>  - Virtual DOM
>  - Async rendering
>  - Reactive data-binding
>  - Typescript
>  - JSX
>  - Static Site Generation (SSG)

Fonte: https://stenciljs.com/docs/introduction

*Web components* podem ser utilizados sem o auxilio de nenhuma outra tecnologia, apenas *HTML, CSS e Javascript*, porém o Stencil fornece uma ótima experiência de desenvolvimento contando inclusive com bibliotecas que ajudam na integração com outros *frameworks*.

### Stencil no Ionic:

Mantidos pela mesma equipe, os componentes presentes no Ionic são criados utilizando o Stencil ajudando assim o *framework* a prover uma série de ferramentas para se criar aplicativos *mobile cross-platform* nativos e web
com as tecnologias web mais conhecidas como *Angular, React, Vue*, etc. Reutilizando uma única base de código para seus componentes.

A documentação do Ionic é muito completa e é um ótimo material para se estudar essas tecnologias: https://ionicframework.com/docs/api

### Vantagens

 - Tecnologias nativas da web
 - Fácil migração para tecnologias futuras
 - *API* pequena (Fácil de aprender)
 - Facilidade para se criar *Design Systems*
 
### Desvantagens

 - Mais uma tecnologia pra se aprender
 - A integração com outros *frameworks* pode ser difícil de configurar

