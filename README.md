# Foodiary API

Foodiary API é a aplicação backend do projeto Foodiary, desenvolvida utilizando AWS Lambda e API Gateway com o Serverless Framework. Esta API fornece endpoints HTTP para gerenciar e registrar refeições, facilitando a integração com o aplicativo Foodiary.

## Funcionalidades

- Cadastro e consulta de refeições
- Registro de alimentos consumidos
- Integração fácil com o frontend Foodiary
- Deploy automatizado via Serverless CLI

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started/)
- Conta AWS configurada (credenciais)

## Deploy

Para fazer o deploy da API, execute:

```bash
npm run deploy
```

Após o deploy, será exibido o endpoint HTTP gerado pela AWS.

## Uso

Você pode acessar os endpoints da API utilizando ferramentas como `curl` ou Postman. Exemplo de requisição:

```bash
curl https://<seu-endpoint>.execute-api.<região>.amazonaws.com/refeicoes
```

## Desenvolvimento Local

Para testar e desenvolver localmente, utilize:

```bash
npm run dev
```

Isso inicia um emulador local das funções Lambda, permitindo testar os endpoints sem necessidade de deploy.

## Observações

- Por padrão, a API é pública após o deploy. Para ambientes de produção, configure autenticação e autorização.
- Consulte a documentação do Serverless Framework para exemplos avançados e integrações com bancos de dados.

---

Desenvolvido para o projeto Foodiary durante o JStack Lab.
