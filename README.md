# Refund

Projeto desenvolvido durante o curso Fullstack da Rocketseat, com foco principal
em JavaScript. A aplicacao simula uma tela de solicitacao de reembolso, onde o
usuario pode cadastrar despesas, escolher categorias, acompanhar a lista de
solicitacoes e visualizar o total atualizado automaticamente.

<img width="1081" height="605" alt="image" src="https://github.com/user-attachments/assets/972bb8c2-7595-4913-bfe6-edd8a399c0d8" />


## Sobre o projeto

O Refund e uma interface para cadastro de despesas reembolsaveis. A base visual
foi construida com HTML e CSS, enquanto o JavaScript concentra a parte dinamica
da aplicacao: leitura dos dados do formulario, criacao de itens na tela,
formatacao de valores, atualizacao do resumo e remocao de despesas.

Na tela principal, o usuario encontra:

- formulario para informar o nome da despesa;
- selecao da categoria da despesa;
- campo para valor;
- area lateral com a lista de solicitacoes;
- resumo com quantidade de despesas e valor total.

## Destaques do JavaScript

O arquivo `script.js` e responsavel pelo comportamento da aplicacao. Nele foram
praticados conceitos importantes do JavaScript no navegador, como:

- captura e validacao de dados do formulario;
- formatacao de valores em moeda brasileira;
- manipulacao da DOM com criacao dinamica de elementos;
- uso de eventos de formulario e clique;
- atualizacao automatica da quantidade de despesas;
- calculo do valor total conforme os itens sao adicionados ou removidos;
- limpeza dos campos apos o cadastro de uma despesa.

## Tecnologias

- HTML
- CSS
- JavaScript

## Estrutura

```text
.
├── img/
│   ├── accommodation.svg
│   ├── chevron-down.svg
│   ├── food.svg
│   ├── logo.svg
│   ├── others.svg
│   ├── remove.svg
│   ├── services.svg
│   └── transport.svg
├── index.html
├── script.js
├── styles.css
└── README.md
```

## Como executar

Abra o arquivo `index.html` no navegador.

Tambem e possivel usar uma extensao como Live Server no VS Code para visualizar
o projeto em ambiente local.

## Objetivo de aprendizado

Este projeto faz parte dos estudos do curso Fullstack da Rocketseat e reforca,
principalmente, a pratica de JavaScript aplicado a uma interface real. O objetivo
foi entender como transformar uma tela estatica em uma experiencia interativa,
respondendo as acoes do usuario e mantendo os dados exibidos sempre atualizados.

Durante o desenvolvimento, o foco esteve em organizar a logica da aplicacao,
trabalhar com eventos, manipular elementos HTML via DOM e controlar os valores
das despesas diretamente pelo JavaScript.
