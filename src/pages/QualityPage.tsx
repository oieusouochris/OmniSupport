import React from 'react';
import AuditSummaryWidget from '../components/audits/AuditSummaryWidget';
import AuditVisualizer from '../components/audits/AuditVisualizer';

const QualityPage: React.FC = () => {
    return (
        <div className="space-y-6 p-4 md:p-6">
            <h1 className="text-2xl font-bold">Qualidade & Auditoria</h1>
            <p className="text-muted-foreground">
                Monitore a qualidade do atendimento e gerencie auditorias internas.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <AuditSummaryWidget />
                <AuditVisualizer />
            </div>
             <div className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Lista de Auditorias</h2>
                {/* Aqui entraria o componente AuditList com toolbar */}
                 <div className="p-8 border rounded-lg flex items-center justify-center bg-muted">
                    <p className="text-muted-foreground">Componente de lista de auditorias em breve.</p>
                </div>
            </div>
        </div>
    );
};

export default QualityPage;
