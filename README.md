<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Uma estrutura <a href="http://nodejs.org" target="_blank">Node.js</a> progressiva para criar aplicativos do lado do servidor eficientes e escaláveis.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

[Nest](https://github.com/nestjs/nest) repositório inicial TypeScript da estrutura.

## Instalação

```bash
$ npm install
```

## Executando o aplicativo

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Teste

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Suporte

Nest é um projeto de código aberto licenciado pelo MIT. Pode crescer graças aos patrocinadores e ao apoio de patrocinadores incríveis. Se você quiser se juntar a eles, [leia mais aqui](https://docs.nestjs.com/support).

## Contatos

- Autor - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Site - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Licença

Nest é [licenciado pelo MIT](LICENÇA).

## Sobre

Esse sistema foi criado com o objetivo de encurtar URLs transformando-as em URLs curtas de 6 caracteres.

## Rotas

O sistema está devidamento documentado com o Swagger, entretanto segue abaixo as rotas de acesso:

- Criar usuário

http://localhost:3000/users

{

	"firstName": "Victor",
	"lastName": "Ozoterio",
	"email": "example@gmail.com",
	"password": "Senha@123"

}

- Login

http://localhost:3000/auth/login

{

	"email": "example@gmail.com",
	"password": "Senha@123"

}

- Atualizar usuário

http://localhost:3000/users/{id}

{

	"firstName": "Vitor",
	"lastName": "Ferreira"

}

- Exibir ou deletar usuário

http://localhost:3000/users/{id}

{

    ...

}

- Criar URL encurtada anonimamente

http://localhost:3000

{

    "originalUrl": "https://websiteexample.com"

}

- Criar URL encurtada com usuário

http://localhost:3000/sites

{

    "originalUrl": "https://websiteexample.com"

}

- Atualizar origem da URL encurtada

http://localhost:3000/sites/{id}

{

	"originalUrl": "https://examplewebsite.com"

}

- Exibir ou deletar URL encurtada

http://localhost:3000/sites/{id}

{

    ...

}

- Ir para o site através da URL encurtada

http://localhost:3000/{shortURL}


## Prazos e Entregas

| Tarefas       | Estimativa          | Realizado          |
| --------------- | ----------------- | ----------------- |
| Sistema de usuários | 2h | 2h |
| Fortificação e criptografia da senha | 3h | 2h |
| Sistema de login | 3h | 2h |
| Autenticação com Bearer Token | 3h | 2h |
| Sistema de sites | 3h | 2h |
| Lógica encurtar URL  | 1h | 40min |
| Relacionar usuários e sites | 2h | 1h:30 |
| Lógica redirecionar site  | 1h | 40min |
| Lógica contabilizar views | 1h:30 | 1h |
| Definir rotas públicas e privadas | 2h | 1h:30 |
| Documentação com Swagger | 2h:30 | 2h |
