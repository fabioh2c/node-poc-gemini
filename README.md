## Exemplo conexão ao Google Gemini via GCP Functions

Este projeto em Node.js se conecta a uma API do Google Cloud Functions criada que processa um prompt e retorna a resposta processada pelo Gemini AI.

## Funcionalidades

- Envia um prompt definido na variável `prompt` para a API GCP functions que a processa o resulvado via Gemini AI.

## Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- Conta no Google Cloud Platform
- Google Cloud SDK instalado e configurado
- Projeto no Google Cloud com a API Cloud Functions e IA Generativa habilitadas

## Configuração do Projeto

1. Clone este repositório:

    ```sh
    git clone https://github.com/fabioh2c/node-poc-gemini.git
    cd node-poc-gemini
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

3. Configure as credenciais do Google Cloud:

    - Crie um serviço de conta no Google Cloud.
    - Baixe o arquivo JSON da chave da conta de serviço.
    - Defina a variável de ambiente 'GCP_KEY_FILE' com o caminho para o arquivo JSON;
    - Defina a variável de ambiente 'GCP_CLOUDFUNCTION_URL' com a URL da API. Exemplo: https://REGION-PROJECT_ID.cloudfunctions.net/FUNCTION_NAME

## Uso

1. Execute o aplicativo:

    ```sh
    node index.js
    ```

2. A aplicação enviará um prompt para a função do Google Cloud e exibirá a resposta gerada pela IA generativa Gemini no console.

## Estrutura do Projeto

- `index.js`: Arquivo principal que gerencia o envio do prompt e a recepção da resposta.
- `package.json`: Gerenciamento de dependências e scripts.
- `.env`: Configurações do ambiente.
- `README.md`: Este arquivo de documentação.

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Abra uma issue ou envie um pull request com melhorias ou correções.

## Licença

Este projeto está licenciado sob a Licença MIT. 
