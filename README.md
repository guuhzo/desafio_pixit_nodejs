# DESAFIO PIXIT NODE.JS

## Aplicação Cliente/Servidor desenvolvida utilizando NodeJS e Typescript

## Atenção

#### Para que a aplicação rode corretamente é necessário a configuração de um arquivo .env com as variáveis. O arquivo *.example.env* está disponível para servir de base para o proeenchimento do arquivo final.

## Passo a passo

### Baixar pacotes
> yarn 

ou

> npm install

### Realizar a build do projeto
> yarn build

ou

> npm build

### Rodar as migrations para construção da tabela de usuários
> yarn typeorm migration:run

ou

> npm typeorm migration:run

### Subir a aplicação
> yarn start

ou 

> npm start

## Adendos

1. ### A variável ENV deve estar como PROD para executar as migrations de marneira correta após a etapa de BUILD.



2. ### Na primeira execução de qualquer rota o sistema processará o middleware *bigBang* que é responsável por criar o primeiro usuário da aplicação. Essa etapa se é necessária pois uma vez que todas as rotas são autenticadas com exceção da rota de login.