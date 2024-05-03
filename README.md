# Projeto de Estudo: API REST com Node, Express, TypeScript & MongoDB

Este é um projeto de estudo que demonstra a criação de uma API REST utilizando Node.js, Express, TypeScript e MongoDB. O projeto inclui rotas autenticadas e utiliza cookies para gerenciar a autenticação de usuários.

Espero que isso seja útil para quem deseja usar ou contribuir com meu projeto de estudo!

## Instalação

Para começar, siga estas instruções:

1. Clone o repositório em sua máquina local:

    ```bash
    git clone https://github.com/michaloumen/restapi-node-express-typescript.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd <seu-projeto>
    ```

3. Instale as dependências do projeto:

    ```bash
    npm install
    ```

4. Crie um arquivo `.env` no diretório raiz do projeto e adicione a URL de conexão com seu banco de dados MongoDB:

    ```
    MONGO_URL=sua-url-de-conexao-com-o-MongoDB
    ```

    Certifique-se de substituir `sua-url-de-conexao-com-o-MongoDB` pela URL correta de conexão com o seu banco de dados MongoDB.

## Executando o Projeto

Para iniciar o servidor, execute o seguinte comando:

```bash
npm start
```

## Documentação da API

Nesta seção, você encontrará exemplos de como usar a API. Os exemplos incluem operações de POST, GET, UPDATE e DELETE gerados a partir da pasta `documentation .rest`.

1. Registro de usuário no Mongo
![registro de usuário](https://github.com/michaloumen/restapi-node-express-typescript/assets/73248516/63f754a8-9bea-48f6-83a9-5fec28e66289)
![registro de usuário mongo](https://github.com/michaloumen/restapi-node-express-typescript/assets/73248516/7556beca-0ba6-4356-b323-1f4e067d1538)

2. Login. Quando um usuário faz login, um cookie é gerado contendo um token de sessão. Esse token é utilizado para autenticar o usuário em outras solicitações, como deletar ou atualizar suas informações. 
![login de usuário](https://github.com/michaloumen/restapi-node-express-typescript/assets/73248516/4e38f3d9-71de-443c-a2c6-93006af9f1d4)

3. Buscando usuários com o token de sessão 
![get de usuários com o token de sessão](https://github.com/michaloumen/restapi-node-express-typescript/assets/73248516/34619b31-dcc9-46c2-b03f-022552aae7b5)

4. Deletando usuário logado
![deletando usuário](https://github.com/michaloumen/restapi-node-express-typescript/assets/73248516/5398329b-c987-4c5b-815e-09eb41014793)

5. Só é possível excluir o próprio usuário logado
![tentando excluir usuário que não sou eu](https://github.com/michaloumen/restapi-node-express-typescript/assets/73248516/4c976f01-1967-4b6c-8d39-a23c86829345)

6. Update de usuário. Só é possível atualizar o próprio usuário logado
![atualiza usuário](https://github.com/michaloumen/restapi-node-express-typescript/assets/73248516/1f7a0fcb-4197-4be9-b730-1fabca21bf93)

7. Logout 
![logout](https://github.com/michaloumen/restapi-node-express-typescript/assets/73248516/586061ab-ad31-4bbc-ba23-bc870cdd9e36)


