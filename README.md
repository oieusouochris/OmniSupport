# OmniSupport: Plataforma de Atendimento Inteligente

Este repositório contém o código-fonte da plataforma OmniSupport, uma solução completa para atendimento ao cliente que integra dashboards de análise, caixa de entrada unificada, construtor de fluxos de automação com IA e uma base de conhecimento.

## Rodando Localmente

**Pré-requisitos:** Node.js (versão recomendada no `.nvmrc`)

1.  **Instalar Dependências:**
    ```bash
    npm install
    ```

2.  **Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto. Você precisará adicionar as chaves do seu projeto Firebase.
    
    **IMPORTANTE:** As variáveis de ambiente para o cliente no Vite devem ser prefixadas com `VITE_`.
    
    Exemplo de `.env`:
    ```dotenv
    VITE_FIREBASE_API_KEY=SUA_CHAVE_API_AQUI
    VITE_FIREBASE_AUTH_DOMAIN=SEU_DOMINIO_AUTH_AQUI
    VITE_FIREBASE_PROJECT_ID=SEU_ID_DE_PROJETO_AQUI
    VITE_FIREBASE_STORAGE_BUCKET=SEU_STORAGE_BUCKET_AQUI
    VITE_FIREBASE_MESSAGING_SENDER_ID=SEU_SENDER_ID_AQUI
    VITE_FIREBASE_APP_ID=SEU_APP_ID_AQUI
    ```

3.  **Rodar o Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila a aplicação para produção.
- `npm run preview`: Inicia um servidor de produção local para testar o build.
- `npm run lint`: Executa o linter para identificar problemas no código.
- `npm run test`: Executa os testes unitários e de integração com Vitest.

## Funcionalidades Principais

*   **Caixa de Entrada Unificada:** Gerencie conversas de múltiplos canais com uma visão 360° do cliente.
*   **Diagnóstico 360° (Observabilidade):** Monitore a saúde do sistema, status de serviços e eventos de performance em tempo real.
*   **Painel Administrativo:** Ferramentas poderosas para administradores, incluindo reconhecimento de texto (OCR) e análise de fluxos com IA.
*   **Gestão de Processos:** Crie e gerencie regras de negócio, respostas prontas e canais de atendimento.
*   **Análise com IA:** A plataforma utiliza IA para resumir conversas, analisar sentimentos e muito mais.