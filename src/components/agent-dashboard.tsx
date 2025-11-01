import React from 'react';
import { Button } from '../ui/button';
import { PlusCircle, Activity, Star } from 'lucide-react';
import KpiCard from '@/features/dashboard/components/KpiCard';
import RecentFeedback from './components/RecentFeedback';
import ResolutionTimeChart from '@/features/reports/components/ResolutionTimeChart';
import AuditMetricsWidget from './components/AuditMetricsWidget';

const AgentDashboard: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Seu Painel, Agente</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Novo Ticket
                </Button>
            </div>

            {/* KPI Cards */}
            <div className="grid gap-4 md-grid-cols-2 lg:grid-cols-4">
                <KpiCard title="Tickets Abertos" value="12" icon={Activity} />
                <KpiCard title="Sua Pontuação CSAT" value="96%" icon={Star} />
                <KpiCard title="Resolvidos Hoje" value="8" />
                <KpiCard title="Tempo Médio de Resposta" value="22min" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                     <ResolutionTimeChart />
                     <AuditMetricsWidget />
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                   <RecentFeedback />
                </div>
            </div>
        </div>
    );
};

export default AgentDashboard;