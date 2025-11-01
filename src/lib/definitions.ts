import { type User } from 'firebase/auth';

// User and Auth

// Base user type for data representation (mocks, firestore documents, etc.)
// Contains only serializable data, no methods.
export interface BaseAppUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
    role: 'agent' | 'supervisor' | 'admin';
}

// Full AppUser type for the authenticated user object in the app context.
// This decouples AppUser from the complex Firebase User object, creating a clean,
// serializable user object for the application state.
export type AppUser = BaseAppUser;


// Audit
export type AuditStatus = 'Pendente' | 'Em Progresso' | 'Concluída' | 'Cancelada';
export type AuditCategory = 'Segurança' | 'Performance' | 'Qualidade' | 'Processo';

export interface AuditItem {
    id: string;
    category: AuditCategory;
    description: string;
    status: AuditStatus;
    timestamp: number;
    history?: { id: string; timestamp: number; userId: string; action: string }[];
}

// General
export interface HistoryEvent {
    id: string;
    type: 'ticket_created' | 'note_added' | 'status_changed' | 'email_sent';
    timestamp: number;
    description: string;
    author: {
        id: string;
        name: string;
    };
}

export interface Customer {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
}

// Conversation / Ticket
export type TicketStatus = 'Aberto' | 'Pendente' | 'Resolvido' | 'Fechado';
export type TicketPriority = 'Baixa' | 'Média' | 'Alta' | 'Urgente';
export type Channel = 'Email' | 'Chat' | 'Voz' | 'API';

export interface Ticket {
    id: string;
    subject: string;
    customer: Customer;
    status: TicketStatus;
    priority: TicketPriority;
    channel: Channel;
    agent?: BaseAppUser;
    tags?: string[];
    createdAt: number;
    updatedAt: number;
}


export interface Conversation {
    id: string;
    customer: Customer;
    subject: string;
    status: 'open' | 'closed' | 'snoozed';
    lastMessage: string;
    lastMessageTimestamp: number;
    agent: BaseAppUser;
    channel: Channel;
    tags: string[];
    history: HistoryEvent[];
}

// AI
export interface AIFlowSuggestions {
    optimization: string;
    security: string;
    clarity: string;
}

export type Tone = 'Neutro' | 'Positivo' | 'Negativo' | 'Misto';
export type Emotion = 'Alegria' | 'Frustração' | 'Urgência' | 'Confusão' | 'Nenhum';

export interface ToneAnalysisResult {
    tone: Tone;
    emotion: Emotion;
    confidence: number;
}


// Service Status
export type ServiceStatusValue = 'operational' | 'degraded' | 'outage';
export interface ServiceStatus {
    name: string;
    status: ServiceStatusValue | 'disabled';
    description: string;
}

export interface ApiIntegration {
    name: string;
    enabled: boolean;
    status: ServiceStatusValue;
    description: string;
}


// Settings
export interface CannedResponse {
    id: string;
    shortcut: string;
    content: string;
    tags: string[];
}

// Knowledge Base
export type KbArticleStatus = 'draft' | 'published' | 'archived';

export interface KbArticle {
    id: string;
    title: string;
    content: string;
    author: BaseAppUser;
    status: KbArticleStatus;
    tags: string[];
    createdAt: number;
    updatedAt: number;
    views: number;
    likes: number;
    dislikes: number;
}

// Feedback
export interface Feedback {
    id: string;
    customerName: string;
    rating: number; // 1-5
    comment: string;
    timestamp: number;
}

// System Metrics
export interface SystemMetrics {
    cpu: number;
    memory: number;
    disk: number;
    network: number;
}

// Adicionada a definição de tipo ausente para uma única métrica do sistema.
export interface SystemMetric {
    name: string;
    value: number | string;
    unit: string;
    history?: { name: string; value: number }[];
}

// Adicionada a definição de tipo ausente para eventos de performance.
export interface PerformanceEvent {
    name: string;
    value: number;
    unit: 'ms' | 's';
    timestamp: number;
}

// Adicionada a definição de tipo ausente para atividades de usuário.
export type UserActivityType = 'system_alert' | 'automation_triggered' | 'billing_update' | 'security_alert' | 'flow_updated';
export interface UserActivity {
    id: string;
    type: UserActivityType;
    description: string;
    timestamp: number;
}


export interface TeamMember {
    id: string;
    name: string;
    role: 'agent' | 'supervisor';
    avatarUrl?: string;
    stats: {
        tickets_resolved: number;
        avg_response_time: number; // in minutes
        satisfaction: number; // percentage
    };
}

export interface TeamGoal {
    id: string;
    title: string;
    target: number;
    current: number;
    metric: string; // e.g., 'tickets', '%', 'min'
}

export interface DailyPhrase {
    phrase: string;
    author: string;
}

export interface WeatherData {
    city: string;
    temperature: number;
    condition: string;
    icon: string;
    humidity: number;
    wind_speed: number;
}

export interface TechNewsArticle {
    title: string;
    link: string;
    source: string;
    published_date: string;
}

export interface Session {
    id: string;
    user: BaseAppUser;
    ipAddress: string;
    location: string;
    device: string;
    startTime: number;
    lastSeen: number;
    status: 'active' | 'expired';
}