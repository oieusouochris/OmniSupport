import React from 'react';
import { ActivityFeed } from '@/components/ui/activity-feed';
import { AlertTriangle, ServerCrash, ShieldCheck } from 'lucide-react';
import { type UserActivity } from '@/lib/definitions';

const eventIcons: Record<UserActivity['type'], React.ReactNode> = {
    system_alert: <AlertTriangle size={16} />,
    automation_triggered: <ServerCrash size={16} />,
    billing_update: <ShieldCheck size={16} />,
    security_alert: <ShieldCheck size={16} />,
    flow_updated: <ServerCrash size={16} />,
};

// Mock data, in a real app this would come from a store or API
const mockActivities: UserActivity[] = [
    { id: '1', type: 'security_alert', description: 'Login suspeito bloqueado da IP 123.45.67.89', timestamp: Date.now() - 300000 },
    { id: '2', type: 'automation_triggered', description: 'Automação "Fechar Tickets Inativos" executada.', timestamp: Date.now() - 600000 },
    { id: '3', type: 'system_alert', description: 'Uso da CPU excedeu 90% por 5 minutos.', timestamp: Date.now() - 900000 },
];

const RecentEventsFeed: React.FC = () => {
    
    const formattedActivities = mockActivities.map(activity => ({
        id: activity.id,
        icon: eventIcons[activity.type],
        title: activity.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        description: activity.description,
        timestamp: new Date(activity.timestamp).toLocaleString('pt-BR'),
    }));

    return (
        <ActivityFeed
            title="Eventos Recentes do Sistema"
            description="Últimos alertas e atividades automatizadas."
            activities={formattedActivities}
        />
    );
};

export default RecentEventsFeed;