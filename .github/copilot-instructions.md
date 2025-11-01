# Instruções para Agentes AI no OmniSuport

Este documento contém informações essenciais para agentes AI trabalhando no projeto OmniSuport, uma plataforma de atendimento ao cliente com recursos de IA.

## Arquitetura e Estrutura

### Componentes Principais
- **Frontend (React/Vite)**: `/src/`
  - Dashboards (Admin/Agent/Supervisor): `/src/components/`
  - Fluxos de IA: `/src/ai/flows/`
  - Integrações: `/src/lib/api/`
  - Contextos globais: `/src/contexts/`

- **Backend (TypeScript)**: `/omnisuport/`
  - Controllers: `/omnisuport/src/controllers/`
  - Rotas da API: `/omnisuport/src/routes/`
  - Definições de tipos: `/omnisuport/src/types/`

- **Cloud Functions**: `/functions/`
  - Lógica serverless: `/functions/src/`

### Padrões de Desenvolvimento

1. **Gerenciamento de Estado**
   - Contextos React para estado global (`/src/contexts/`)
   - Hooks customizados para lógicas reutilizáveis (`/src/hooks/`)
   - Exemplo: `AuthContext.tsx` para autenticação

2. **Comunicação com APIs**
   - Funções de API centralizadas em `/src/lib/api/`
   - Firebase como backend principal
   - Exemplo de chamada de API:
   ```typescript
   import { api } from '@/lib/api'
   const response = await api.tickets.list()
   ```

3. **UI/UX**
   - Componentes UI base em `/src/components/ui/`
   - Layout principal em `/src/components/MainLayout.tsx`
   - Navegação configurável via `/src/config/nav-config.ts`

## Workflows de Desenvolvimento

### Configuração Inicial
1. Instalar dependências: `npm install`
2. Configurar variáveis de ambiente:
   ```dotenv
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   # (ver README.md para lista completa)
   ```
3. Iniciar servidor de desenvolvimento: `npm run dev`

### Testes e Validação
- Testes unitários/integração: `npm run test`
- Linting: `npm run lint`
- Build de produção: `npm run build`

## Convenções do Projeto

1. **Nomenclatura**
   - Componentes React: PascalCase (`UserProfile.tsx`)
   - Hooks: camelCase com prefixo "use" (`useAuth.ts`)
   - Utilidades: camelCase (`error-utils.ts`)

2. **Estrutura de Diretórios**
   - Features completas em `/src/features/`
   - Componentes compartilhados em `/src/components/`
   - Tipos globais em `/src/types.ts`

3. **Integração com Firebase**
   - Configuração em `/src/lib/firebase/`
   - Autenticação via `useAuth` hook
   - Cloud Functions para lógica serverless

## Dicas para Desenvolvimento

1. **Performance**
   - Usar hooks de debounce para buscas (`useDebounce.ts`)
   - Implementar virtualização para listas longas
   - Memoizar componentes pesados com `React.memo`

2. **Segurança**
   - Validar permissões via `AuthContext`
   - Sanitizar inputs do usuário
   - Usar tipagem estrita do TypeScript

3. **Debug**
   - Logger customizado em `/src/lib/logger.ts`
   - DevTools do React/Firebase
   - Console do Firebase para logs das Cloud Functions

## Links Úteis
- [Firebase Console](https://console.firebase.google.com)
- [Documentação do Vite](https://vitejs.dev/)