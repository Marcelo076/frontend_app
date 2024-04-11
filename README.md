# Frontend App

Este é um projeto Vue.js configurado com Docker para facilitar o desenvolvimento. Aqui estão as instruções sobre como configurar e iniciar o projeto.

## Pré-requisitos

- Docker e Docker Compose devem estar instalados em sua máquina. Se você ainda não os instalou, consulte [a documentação do Docker](https://docs.docker.com/get-docker/) para obter instruções sobre como instalá-los.

## Configuração e Início do Projeto

1. **Inicie a API**:
    - É recomendado iniciar o projeto da API primeiro, pois o projeto Vue.js pode depender de dados ou serviços fornecidos pela API.
    - Certifique-se de seguir as instruções do projeto da API para iniciá-lo e mantê-lo em execução antes de iniciar este projeto.

2. **Clone o repositório**:
    - Primeiro, clone o repositório do projeto para a sua máquina local:

    ```bash
    git clone <URL_do_repositório>
    cd <nome_do_repositório>
    ```

3. **Inicie os contêineres Docker**:
    - Você pode usar o Docker Compose para iniciar o projeto. Execute o comando a partir do diretório raiz do projeto:

    ```bash
    docker-compose up 
    ```

    - Isso construirá e iniciará o contêiner com o projeto Vue.js.

4. **Acesse a aplicação**:
    - Depois que os contêineres estiverem em execução, você poderá acessar a aplicação em seu navegador:

    ```plaintext
    http://localhost:8080/
    ```

5. **Parar os contêineres**:
    - Para parar os contêineres, execute o comando:

    ```bash
    docker-compose down
    ```

## Notas

- A porta 8080 é exposta pelo Dockerfile e mapeada pelo arquivo `docker-compose.yml`. Se você desejar alterar a porta, edite o arquivo `docker-compose.yml` e mude o mapeamento da porta.
- Este projeto é configurado para o desenvolvimento, portanto, ao executar `docker-compose up --build`, você usará o comando `npm run dev` para iniciar o servidor de desenvolvimento do Vue CLI.

## Recursos Adicionais

- Consulte a [documentação do Vue CLI](https://cli.vuejs.org/) para obter mais informações sobre o Vue CLI e suas funcionalidades.
- Consulte a [documentação do Docker](https://docs.docker.com/) para obter mais informações sobre como usar o Docker.

## Licença

Este projeto está licenciado sob uma licença específica. Consulte o arquivo `LICENSE` para obter mais detalhes.
