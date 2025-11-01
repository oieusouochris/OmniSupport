import React from 'react';
import SystemMetricsWidget from '@/features/observability/components/SystemMetricsWidget';
import ServiceStatusWidget from '@/features/observability/components/ServiceStatusWidget';
import TextRecognitionWidget from './components/TextRecognitionWidget';
import AIFlowAnalysisWidget from './components/AIFlowAnalysisWidget';
import KpiCard from '@/features/dashboard/components/KpiCard';
import { Users, Server, Activity } from 'lucide-react';

const AdminDashboard: React.FC = () => {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Painel do Administrador</h1>
            
             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <KpiCard title="Usuários Ativos" value="53" icon={Users} />
                <KpiCard title="Status do Sistema" value="Operacional" icon={Server} status="operational" />
                <KpiCard title="Eventos (24h)" value="1,204" icon={Activity} />
                <KpiCard title="APIs Ativas" value="4" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <AIFlowAnalysisWidget />
                    <TextRecognitionWidget />
                </div>
                <div className="space-y-6">
                    <SystemMetricsWidget />
                    <ServiceStatusWidget />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;