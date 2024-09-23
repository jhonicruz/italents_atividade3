## Funcionalidades

- \*\* Componentes: O projeto contém no mínimo 4 componentes React.
- \*\* Troca de Dados via Propriedades: Os componentes trocam dados entre si utilizando propriedades.
- \*\* Atributo Children: Pelo menos um componente utiliza o atributo children.
- \*\* Formulário: O projeto contém um formulário com componentes reutilizáveis.
- \*\* Componente de Lista: O projeto inclui um componente de lista para exibir itens.

## Tecnologias Utilizadas

React
Vite
Tailwind CSS
ESLint
Plugins Utilizados
Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh.

## Instalação

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/seu-repositorio.git
 cd seu-repositorio
```

Instale as dependências:

`npm install`

Inicie o servidor de desenvolvimento:

`npm run dev`

Configuração do Tailwind CSS

O arquivo tailwind.config.js foi configurado para incluir um breakpoint personalizado:

```module.exports = {
  theme: {
    extend: {
      screens: {
        sm: '700px',
      },
    },
  },
  // outras configurações...
};

```

Estrutura de Componentes

- Header: Exibe a logomarca e um menu de navegação.
- MainContent: Exibe uma lista de itens e um formulário para entrar na lista de espera.
- Footer: Exibe informações de copyright.

