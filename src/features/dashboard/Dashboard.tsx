import React from 'react';
import AgentDashboard from '@/features/agent/AgentDashboard';
import AdminDashboard from '@/features/admin/AdminDashboard';
import SupervisorDashboard from '@/features/supervisor/SupervisorDashboard';
import { useAuth } from '@/hooks/use-auth';
import DashboardSkeleton from '@/pages/DashboardSkeleton';

/**
 * Componente principal do Dashboard que renderiza o painel correto
 * com base na função (role) do usuário autenticado.
 */
const Dashboard: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <DashboardSkeleton />;
    }

    // Renderiza o dashboard apropriado para la role do usuário.
    // Adicionado um fallback para o dashboard de agente se a role não estiver definida.
    const renderDashboardByRole = () => {
        if (!user) {
            return <DashboardSkeleton />;
        }
        switch (user.role) {
            case 'admin':
                return <AdminDashboard />;
            case 'supervisor':
                return <SupervisorDashboard />;
            case 'agent':
            default:
                return <AgentDashboard />;
        }
    };

    return (
        <div className="flex flex-col h-full">
            <main className="flex-1 overflow-auto p-4 md:p-6">
                {renderDashboardByRole()}
            </main>
        </div>
    );
};

export default Dashboard;