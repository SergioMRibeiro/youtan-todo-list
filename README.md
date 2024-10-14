# Para inicializar o projeto

Para realizar o download de pacotes e dependências necessárias: 
`yarn` ou `npm i`

Para inicialização utilizando npm: `npm start:dev` ou `npm start dev`

Para inicialização utilizando yarn: `yarn start:dev`

Caso ocorra problemas na inicialização do projeto, por conta da versão do
Typescript, algumas soluções possíveis:

- Usar legacy--peer-deps: Ignora os conflitos de dependências, permitindo a
  instalação do pacote.

`npm install --legacy-peer-deps`

- Downgrade do TypeScript Caso não precise da versão atualizada do Typescript,
  pode fazer o downgrade:

`npm install typescript@4.9.5`

- Atualizar react-scripts Verificar se há versão mais recente e que seja
  compatível. Para atualizar:

`npm install react-scripts@latest`

## Tecnologias utilizadas no projeto:

React - Uma biblioteca JavaScript para construir interfaces de usuário
interativas e reutilizáveis.

Typescript - Um superset do JavaScript que adiciona tipagem estática, melhorando
a robustez e a manutenção do código.

Scss - Uma extensão do CSS que permite a utilização de variáveis, aninhamento e
mixins, facilitando a escrita de estilo

Db.json - Um arquivo utilizado para simular uma API RESTful em ambientes de
desenvolvimento, permitindo o armazenamento e a manipulação de dados de forma
simples.

Concurrently - Uma ferramenta que permite executar múltiplos comandos em paralelo na linha de comando, facilitando o gerenciamento de tarefas simultâneas durante o desenvolvimento.

Node: versão 20.15.1

## To Do List

Para o desenvolvimento do projeto, foi realizado um layout no Figma, para
auxílio e embasamento.

https://www.figma.com/design/xh3ZD0RH79JytiJH2NY6jA/Untitled?node-id=301-2&t=Hvs2AlFVllVjCAmR-1

## Imagens do projeto desenvolvido:

<div>
<img src="https://media.discordapp.net/attachments/307653329004134400/1295214693685661777/image.png?ex=670dd62e&is=670c84ae&hm=c3710b268934934386f57f2f529a796c2d0b7f2b0e9adb24a8b3350f1698fd61&=&format=webp&quality=lossless&width=1407&height=671"></img>
</div>

<div>
<img src="https://media.discordapp.net/attachments/307653329004134400/1295214704289124382/image.png?ex=670dd631&is=670c84b1&hm=c66ae90356a0eff724c4dfe1fc4f8ef12d2979913f7afd55874e3843f1b253ad&=&format=webp&quality=lossless&width=1164&height=554"></img>

### Visualização de tarefa

<div>
<img src="https://media.discordapp.net/attachments/307653329004134400/1295214998573813792/image.png?ex=670dd677&is=670c84f7&hm=142182679e6f7f6ff53a9b4ef6bf9dfef8c0bdc36f3cfeef1497bf5a9af87939&=&format=webp&quality=lossless"></img>

### Edição de tarefa

<div>
<img src="https://media.discordapp.net/attachments/307653329004134400/1295215037841149992/image.png?ex=670dd680&is=670c8500&hm=1247ac88938c7d6ca6e16490cdbed49c6606bad3718078ad6c66f148b8b5dd3f&=&format=webp&quality=lossless"></img>

## Feature Futuras ( Melhorias )

- Criação de uma rota para uma página de dashboard, mostrando em estatísticas a quantidade de tarefas concluídas, em aberto e fazendo. (Verificar figma - Dashboard)
- Criação de uma api para manipulação de requisições.
- Substituição do json-server por um banco de dados relacional.
- Mais Tratamento de erros
- Desenvolmento da página de Sprint

