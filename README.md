![Itelios](http://www.itelios.com.br/images/logo_itelios_orange@2x.png)

# Itelios Frontend Challenge

Bem-vindo ao desafio de admissão de front-end da Itelios! O que preparamos para este desafio é um pedacinho do que você irá fazer aqui na Itelios, caso seja admitido.

O objetivo do desafio é simples: Consumir uma json via xhttp e, com o resultado dele, montar um widget de prateleira de cross-sell. Na resposta deste request você receberá uma lista de produtos. Esta lista servirá para montar um pequeno carrossel de produtos. 

## Design

- A prateleira apresentada deve seguir o [seguinte design](desafio-front-end-itelios.jpg)
- Baseado neste layout, faça uma adaptação responsiva para celulares.

## Como realizar o teste

- Faça um fork deste repositório em seu GitHub
- Adicione ao Readme uma descrição de como executar seu projeto
- Descreva as funcionalidades do seu desafio, venda seu peixe! Por exemplo, se fez a prateleira com javascript puro, porém utilizou uma biblioteca para o carrossel, deixe isso no Readme. Se usou ES6 com um transpiler, conte isso pra gente. 
- Não há um limite de tempo, porém consideramos ideal não gastar mais que 8h neste desafio
- Faça commits parciais, para que possamos acompanhar o seu desenvolvimento.
- Em caso de dúvidas, entre em contato com flora.braz@itelios.com

## Dicas
 
- O ícone do botão é o add-shopping-plus, do Material Design. https://material.io/icons/
- A fontes utilizadas são Roboto Condensed Bold (títulos), Roboto Regular (texto corrido) e Roboto Bold (preço e preço parcelado). 
- We **<3** Vanilla Javascript. Tente executar este teste usando javascript puro. Só utilize bibliotecas como último recurso.
- We **<3** CSS responsivo, organizado, modular e feito com pré-processadores. Sinta-se livre para usar a arquitetura CSS que achar mais adequada. 
- Trabalhamos com clientes perfeccionistas, portanto tenha atenção com espaçamentos, tamanhos e estilos de fonte. 

## Critérios de avaliação

- Alcançar os objetivos propostos
- Qualidade de código
- Commits parciais, mostrando a linha de desenvolvimento
- Boa descrição das funcionalidades do desafio
- Não utilização de bibliotecas ou frameworks
- Fidelidade ao design proposto
- Adaptação mobile


# Desenvolvimento do Teste

## Sobre o desenvolvimento

### O JavaScript

Para o desenvolvimento deste projeto, utilizei **somente** Vanilla Javascript. Todas as funcionalidades, desde a requisição XHTTP, a renderização dos produtos e até o slider responsivo, foram programadas **do zero** utilizando os bons padrões de desenvolvimento web (como o EcmaScript 6, POO e Promises), sempre pensando na modularização dos componentes e em aproveitar os recursos oferecidos pela Orientação a Objetos para resultar num código fácil de manter e compreender. 

### Os estilos

Para os estilos do teste, utilizei a linguagem Stylus por sua simplicidade e clareza. Todos os estilos, incluindo o grid e as classes de responsividade, foram escritos também inteiramente **do zero**. 

Quanto ao grid, me inspirei na nomenclatura do framework Foundation (`column small-x large-x`) para nomear as classes. E para desenvolvê-lo (assim como no front-end em geral), utilizei o módulo FlexBox (módulo nativo dos navegadores). 

Utilizei um padrão de nomenclatura de classes inspirado na metodologia BEM, com algumas modificações: ao invés de separar Blocos de Elementos com `__`, separo com `--`, e ao invés de separar modificadores com `--`, separo com `_`. Faço da seguinte forma, quando tenho liberdade para tal, só por visualmente preferir traços a underlines. 

Poderão notar que não recorro ao JavaScript para nenhum fim que possa ser resolvido com CSS puro. Inclusive poderão notar que para o slider, por exemplo, há somente **uma** regra de CSS adicionada pelo JavaScript. Notarão também que os estilos do próprio slider são pouquíssimos: não mais que 16 linhas, desconsiderado a paginação.


## Para o rodar o teste

Para rodar o teste, sugiro o `http-server`, uma alternativa bastante simples e sem complicações para inicializar um servidor local e testar o projeto.

Basta instalar o pacote com o comando `npm install http-server -g`, ir até a pasta do repositório e rodar o comando `http-server`. Por padrão, um servidor vai ser inicializado no endereço `http://127.0.0.1:8080`.