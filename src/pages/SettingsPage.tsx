import React from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import NotificationSettings from './components/NotificationSettings';
import AppearanceSettings from './components/AppearanceSettings';
import KeyboardShortcuts from './components/KeyboardShortcuts';
import CannedResponsesSettings from './components/CannedResponsesSettings';
import SecuritySettings from './components/SecuritySettings';
import { cn } from '@/lib/utils';

const TABS: { [key: string]: React.ComponentType } = {
    '#notifications': NotificationSettings,
    '#appearance': AppearanceSettings,
    '#canned-responses': CannedResponsesSettings,
    '#security': SecuritySettings,
    '#shortcuts': KeyboardShortcuts,
};

const NavLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.hash === to;
    return (
        <RouterNavLink
            to={{ hash: to }}
            className={cn(
                'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
            )}
        >
            {children}
        </RouterNavLink>
    )
}

const SettingsPage: React.FC = () => {
    const location = useLocation();
    const activeTabKey = location.hash || '#notifications';
    const ActiveComponent = TABS[activeTabKey] || NotificationSettings;

    return (
        <div className="space-y-6 p-4 md:p-6">
            <div>
                <h1 className="text-2xl font-bold">Configurações</h1>
                <p className="text-muted-foreground">Gerencie as configurações da sua conta e da aplicação.</p>
            </div>
            <nav className="flex items-center space-x-2 border-b">
                <NavLink to="#notifications">Notificações</NavLink>
                <NavLink to="#appearance">Aparência</NavLink>
                <NavLink to="#canned-responses">Respostas Prontas</NavLink>
                <NavLink to="#security">Segurança</NavLink>
                <NavLink to="#shortcuts">Atalhos</NavLink>
            </nav>
            <div>
                <ActiveComponent />
            </div>
        </div>
    );
};

export default SettingsPage;