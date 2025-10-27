# Carousel com Scroll Suave

Este projeto é uma implementação de um componente de carousel responsivo utilizando `React` e `react-responsive-carousel`, com suporte para scroll suave entre seções da página e comportamento adaptativo em telas grandes e pequenas.

O projeto está disponível em `https://autopostogrando.netlify.app/`.

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Execução do Projeto](#execução-do-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Estilos](#estilos)
- [Funcionalidades](#funcionalidades)
- [Configuração de Variáveis CSS](#configuração-de-variáveis-css)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

O objetivo deste projeto é implementar um carousel responsivo que exibe múltiplas imagens simultaneamente em telas grandes e ajusta-se para exibir uma imagem por vez em telas pequenas. O projeto também utiliza rolagem suave para navegar entre diferentes seções da página.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **react-responsive-carousel**: Biblioteca para criação de carousels responsivos.
- **CSS3**: Para estilização dos componentes, com uso de variáveis CSS e flexbox.
- **JavaScript (ES6+)**: Para manipulação de eventos e lógica do componente.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina.

### Verificar a versão do Node.js

```bash
node -v
```

### Verificar a versão do npm

```bash
npm -v
```

## Instalação

1. Clone o repositório para sua máquina local:
   
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Execução do Projeto

Para rodar o projeto localmente:

```bash
npm start
```

O projeto está disponível em `https://autopostogrando.netlify.app/`.

## Estrutura do Projeto

Abaixo está a estrutura principal de arquivos do projeto:

```
src/
├── assets/
│   └── images/
│       ├── close.svg
│       ├── logo.svg
│       ├── logo2.svg
│       ├── menu.svg
│       └── react.svg
├── components/
│   ├── Button.tsx
│   └── Slider.tsx
├── pages/
│   └── Home.tsx
├── styles/
│   ├── button.css
│   ├── header.css
│   ├── hero.css
│   ├── index.css
│   ├── slider.css
│   ├── solution.css
│   └── utility.css
└── main.tsx

```

## Estilos

Os estilos são definidos utilizando CSS padrão e variáveis CSS para facilitar a manutenção. Algumas regras importantes:

- **Flexbox**: Usado para centralizar e alinhar o conteúdo.
- **scroll-behavior: smooth**: Ativa a rolagem suave ao clicar em links de âncoras.

## Funcionalidades

- **Carousel Responsivo**: O carousel ajusta o número de imagens exibidas simultaneamente, dependendo do tamanho da tela. Em telas grandes, ele mostra múltiplas imagens ao mesmo tempo.
- **Scroll Suave**: A rolagem da página para diferentes seções ocorre suavemente, proporcionando uma melhor experiência de navegação.
- **Adaptação de Tamanho de Tela**: O componente adapta o comportamento em telas pequenas e grandes, utilizando media queries e JavaScript para gerenciar a experiência.
- **Imagens Dinâmicas**: O carousel utiliza um array de objetos para renderizar dinamicamente as imagens, facilitando a adição de novas imagens.

## Configuração de Variáveis CSS

No projeto, algumas variáveis CSS são utilizadas para personalizar cores, fontes e tamanhos. Aqui está um exemplo de como você pode definir e ajustar essas variáveis no seu arquivo de estilos:

```css
:root {
  --bg-color: #f5f5f5;
  --primary-color: #333;
  --second-text-color: #666;
  --fw-bold: 700;
  --fw-base: 400;
  --fs-base: 1rem;
  --ff-sans: 'Arial', sans-serif;
  --text-color: #000;
}
```

### Descrição das Variáveis:

- **--bg-color**: Cor de fundo usada em várias seções do projeto.
- **--primary-color**: Cor principal para o texto e outros elementos destacados.
- **--second-text-color**: Cor secundária usada para descrições ou textos menos destacados.
- **--fw-bold**: Peso de fonte para texto em negrito.
- **--fw-base**: Peso de fonte base, usado para texto regular.
- **--fs-base**: Tamanho de fonte padrão.
- **--ff-sans**: Família de fontes sans-serif utilizada no projeto.
- **--text-color**: Cor padrão do texto.

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com este projeto, siga os seguintes passos:

1. Faça um fork do repositório.
2. Crie uma nova branch com suas alterações: `git checkout -b minha-nova-feature`.
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`.
4. Faça um push para a branch: `git push origin minha-nova-feature`.
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
