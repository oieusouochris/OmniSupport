# OmniSuport Project

## Descrição
O projeto OmniSuport é uma aplicação desenvolvida em TypeScript que visa fornecer uma solução robusta para gerenciamento de suporte. Ele é estruturado em um ambiente de desenvolvimento baseado em contêiner, facilitando a configuração e a colaboração entre desenvolvedores.

## Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

```
omnisuport
├── .devcontainer
│   ├── devcontainer.json
│   └── Dockerfile
├── src
│   ├── index.ts
│   ├── controllers
│   │   └── index.ts
│   ├── routes
│   │   └── index.ts
│   └── types
│       └── index.ts
├── .vscode
│   └── settings.json
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Instalação
Para configurar o ambiente de desenvolvimento, siga os passos abaixo:

1. Clone o repositório:
   ```
   git clone <url-do-repositorio>
   cd omnisuport
   ```

2. Abra o projeto em um editor de código compatível.

3. Utilize o Docker para iniciar o contêiner de desenvolvimento:
   ```
   docker-compose up
   ```

4. Instale as dependências do projeto:
   ```
   npm install
   ```

## Uso
Após a instalação, você pode iniciar a aplicação com o seguinte comando:
```
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença
Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.