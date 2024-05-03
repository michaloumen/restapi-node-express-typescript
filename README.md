# Projeto de Estudo: API REST com Node, Express, TypeScript & MongoDB

Este é um projeto de estudo que demonstra a criação de uma API REST utilizando Node.js, Express, TypeScript e MongoDB. O projeto inclui rotas autenticadas e utiliza cookies para gerenciar a autenticação de usuários.

Este README.md fornece informações básicas sobre o projeto e como configurá-lo. Espero que isso seja útil para os usuários que desejam usar ou contribuir com seu projeto de estudo!

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
