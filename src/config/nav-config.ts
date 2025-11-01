import React from 'react';
import { Home, Inbox, FileText, BarChart2, Book, CheckSquare, Settings, Users, MessageSquare } from 'lucide-react';

export interface NavItem {
    to: string;
    icon: React.ElementType;
    label: string;
    end?: boolean;
}

export const navConfig: NavItem[] = [
    { to: '/', icon: Home, label: 'Dashboard', end: true },
    { to: '/inbox', icon: Inbox, label: 'Caixa de Entrada' },
    { to: '/tickets', icon: FileText, label: 'Tickets' },
    { to: '/reports', icon: BarChart2, label: 'Relatórios' },
    { to: '/kb', icon: Book, label: 'Base de Conhecimento' },
    { to: '/audits', icon: CheckSquare, label: 'Auditorias' },
    { to: '/users', icon: Users, label: 'Usuários' },
    { to: '/team-chat', icon: MessageSquare, label: 'Chat da Equipe' },
];

export const settingsNavConfig: NavItem[] = [
     { to: '/settings', icon: Settings, label: 'Configurações' },
];