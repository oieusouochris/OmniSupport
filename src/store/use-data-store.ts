// FIX: Atualiza a importação do Zustand para o padrão moderno.
import { create } from 'zustand';
import {
    BaseAppUser,
    AuditItem,
    Ticket,
    Conversation,
    CannedResponse,
    KbArticle,
    Feedback,
    SystemMetrics,
    ApiIntegration,
    TeamMember,
    TeamGoal,
    Session,
    PerformanceEvent,
    Customer,
    AuditStatus
} from '../lib/definitions';


// --- DADOS MOCKADOS CENTRALIZADOS ---
const now = Date.now();
const day = 24 * 60 * 60 * 1000;

export const mockCustomers: Customer[] = [
    { id: 'cust_1', name: 'Alice', email: 'alice@example.com' },
    { id: 'cust_2', name: 'Bob', email: 'bob@example.com' },
];

export const mockUsers: BaseAppUser[] = [
    { uid: 'user_1', displayName: 'Agent Smith', email: 'smith@cortex.com', role: 'agent', photoURL: null },
    { uid: 'user_2', displayName: 'Supervisor Ana', email: 'ana@cortex.com', role: 'supervisor', photoURL: null },
    { uid: 'user_3', displayName: 'Admin Chris', email: 'chris@cortex.com', role: 'admin', photoURL: null },
];

export const mockAuditItems: AuditItem[] = [
    { id: 'audit-1', category: 'Segurança', description: 'Revisar permissões de acesso ao banco de dados', status: 'Pendente', timestamp: now - day * 2 },
    { id: 'audit-2', category: 'Performance', description: 'Otimizar query de busca de tickets', status: 'Em Progresso', timestamp: now - day * 1 },
    { id: 'audit-3', category: 'Qualidade', description: 'Analisar 10 tickets com baixa avaliação', status: 'Concluída', timestamp: now - day * 5 },
    { id: 'audit-4', category: 'Processo', description: 'Documentar novo fluxo de onboarding', status: 'Cancelada', timestamp: now - day * 3 },
    { id: 'audit-5', category: 'Segurança', description: 'Verificar logs de autenticação suspeitos', status: 'Pendente', timestamp: now - day * 1 },
];

export const mockTickets: Ticket[] = [
    { id: '#123', subject: 'Problema com fatura', customer: mockCustomers[0], status: 'Aberto', priority: 'Alta', channel: 'Email', agent: mockUsers[0], tags: ['faturamento', 'urgente'], createdAt: now - day * 1, updatedAt: now - 1000 * 60 * 5 },
    { id: '#124', subject: 'Dúvida sobre API', customer: mockCustomers[1], status: 'Pendente', priority: 'Média', channel: 'Chat', agent: mockUsers[0], tags: ['api', 'dúvida'], createdAt: now - day * 2, updatedAt: now - day * 1 },
    { id: '#125', subject: 'Feature request: dark mode', customer: mockCustomers[0], status: 'Resolvido', priority: 'Baixa', channel: 'API', agent: mockUsers[0], tags: ['feature-request'], createdAt: now - day * 4, updatedAt: now - day * 2 },
];

export const mockConversations: Conversation[] = [
    { id: 'conv-1', customer: mockCustomers[0], subject: 'Re: Problema com fatura', status: 'open', lastMessage: 'Olá, ainda estou aguardando uma resposta sobre a minha fatura.', lastMessageTimestamp: now - 1000 * 60 * 30, agent: mockUsers[0], channel: 'Email', tags: ['faturamento'], history: [] },
    { id: 'conv-2', customer: mockCustomers[1], subject: 'API', status: 'closed', lastMessage: 'Obrigado, funcionou!', lastMessageTimestamp: now - day, agent: mockUsers[0], channel: 'Chat', tags: ['api'], history: [] },
];

export const mockCannedResponses: CannedResponse[] = [
    { id: 'cr-1', shortcut: 'saudacao', content: 'Olá! Agradecemos o seu contato. Como podemos ajudar?', tags: ['geral'] },
    { id: 'cr-2', shortcut: 'agradecimento', content: 'Ficamos felizes em ajudar! Se precisar de mais alguma coisa, é só chamar.', tags: ['geral', 'fechamento'] },
];

export const mockKbArticles: KbArticle[] = [
    { id: 'kb-1', title: 'Como configurar a integração com o Slack', content: '...', author: mockUsers[2], status: 'published', tags: ['integração', 'slack'], createdAt: now - day * 10, updatedAt: now - day * 2, views: 152, likes: 12, dislikes: 1 },
    { id: 'kb-2', title: 'Resolvendo problemas comuns de faturamento', content: '...', author: mockUsers[2], status: 'published', tags: ['faturamento'], createdAt: now - day * 5, updatedAt: now - day * 1, views: 289, likes: 30, dislikes: 2 },
    { id: 'kb-3', title: 'Guia da API para iniciantes (Rascunho)', content: '...', author: mockUsers[1], status: 'draft', tags: ['api'], createdAt: now - day * 1, updatedAt: now, views: 0, likes: 0, dislikes: 0 },
];

export const mockRecentFeedback: Feedback[] = [
    { id: 'fb-1', customerName: 'Alice', rating: 5, comment: 'Atendimento rápido e resolveu meu problema!', timestamp: now - 1000 * 60 * 60 * 2 },
    { id: 'fb-2', customerName: 'Bob', rating: 4, comment: 'Bom, mas demorou um pouco para responder.', timestamp: now - day },
    { id: 'fb-3', customerName: 'Charlie', rating: 5, comment: 'Excelente suporte!', timestamp: now - day * 2 },
];

export const mockSystemMetrics: SystemMetrics = { cpu: 68, memory: 75, disk: 40, network: 22 };

export const mockApiIntegrations: ApiIntegration[] = [
    { name: 'ThreatJammer', enabled: true, status: 'operational', description: 'Threat intelligence API' },
    { name: 'EmailRep.io', enabled: true, status: 'operational', description: 'Email reputation data' },
    { name: 'Shodan', enabled: false, status: 'degraded', description: 'Search engine for Internet-connected devices' },
    { name: 'Dynalist', enabled: true, status: 'operational', description: 'Outlining and note-taking tool' },
];

export const mockTeamMembers: TeamMember[] = [
    { id: 'user_1', name: 'Agent Smith', role: 'agent', stats: { tickets_resolved: 15, avg_response_time: 25, satisfaction: 95 } },
    { id: 'user_4', name: 'Agent Jones', role: 'agent', stats: { tickets_resolved: 12, avg_response_time: 35, satisfaction: 92 } },
    { id: 'user_2', name: 'Supervisor Ana', role: 'supervisor', stats: { tickets_resolved: 5, avg_response_time: 15, satisfaction: 98 } },
];

export const mockTeamGoals: TeamGoal[] = [
    { id: 'goal-1', title: 'CSAT Semanal', target: 95, current: 93, metric: '%' },
    { id: 'goal-2', title: 'Tickets Resolvidos (Mês)', target: 500, current: 320, metric: 'tickets' },
    { id: 'goal-3', title: 'Tempo de Primeira Resposta', target: 30, current: 38, metric: 'min' },
];

export const mockSessions: Session[] = [
    { id: 'session-1', user: mockUsers[0], ipAddress: '192.168.1.1', location: 'São Paulo, BR', device: 'Chrome no macOS', startTime: now - 1000 * 60 * 45, lastSeen: now - 1000 * 60 * 2, status: 'active' },
    { id: 'session-2', user: mockUsers[1], ipAddress: '200.201.202.203', location: 'Rio de Janeiro, BR', device: 'Safari no iOS', startTime: now - day, lastSeen: now - day + 1000 * 60 * 60, status: 'expired' },
];

export const mockPerformanceEvents: PerformanceEvent[] = [
    { name: 'Page Load', value: 350, unit: 'ms', timestamp: now - 1000 * 60 },
    { name: 'API Response', value: 120, unit: 'ms', timestamp: now - 1000 * 30 },
];
// --- FIM DOS DADOS MOCKADOS ---


interface DataStoreState {
    auditItems: AuditItem[];
    tickets: Ticket[];
    conversations: Conversation[];
    cannedResponses: CannedResponse[];
    kbArticles: KbArticle[];
    recentFeedback: Feedback[];
    systemMetrics: SystemMetrics;
    apiIntegrations: ApiIntegration[];
    teamMembers: TeamMember[];
    teamGoals: TeamGoal[];
    sessions: Session[];
    performanceEvents: PerformanceEvent[];
    users: BaseAppUser[];
    customers: Customer[];
    addAuditItem: (item: Omit<AuditItem, 'id' | 'timestamp' | 'status'>) => void;
    updateAuditItemStatus: (id: string, status: AuditStatus) => void;
}

export const useDataStore = create<DataStoreState>((set) => ({
    auditItems: mockAuditItems,
    tickets: mockTickets,
    conversations: mockConversations,
    cannedResponses: mockCannedResponses,
    kbArticles: mockKbArticles,
    recentFeedback: mockRecentFeedback,
    systemMetrics: mockSystemMetrics,
    apiIntegrations: mockApiIntegrations,
    teamMembers: mockTeamMembers,
    teamGoals: mockTeamGoals,
    sessions: mockSessions,
    performanceEvents: mockPerformanceEvents,
    users: mockUsers,
    customers: mockCustomers,

    addAuditItem: (item) => set((state) => ({
        auditItems: [
            ...state.auditItems,
            { ...item, id: `audit-${Date.now()}`, timestamp: Date.now(), status: 'Pendente' },
        ],
    })),

    updateAuditItemStatus: (id, status) => set((state) => ({
        auditItems: state.auditItems.map((item) =>
            item.id === id ? { ...item, status } : item
        ),
    })),
}));