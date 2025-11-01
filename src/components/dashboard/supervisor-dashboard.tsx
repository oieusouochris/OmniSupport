import React from 'react';
import { Users, Activity, Target } from 'lucide-react';
import KpiCard from './KpiCard';
import TeamPerformance from './supervisor/TeamPerformance';
import TeamGoalsWidget from './supervisor/TeamGoalsWidget';

const SupervisorDashboard: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Painel do Supervisor</h1>
            </div>

            {/* KPI Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <KpiCard title="Tickets na Fila" value="34" icon={Activity} />
                <KpiCard title="CSAT da Equipe" value="94%" icon={Users} />
                <KpiCard title="Agentes Online" value="4 / 6" />
                <KpiCard title="Meta do Mês" value="64%" icon={Target} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                     <TeamPerformance />
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                   <TeamGoalsWidget />
                </div>
            </div>
        </div>
    );
};

export default SupervisorDashboard;
