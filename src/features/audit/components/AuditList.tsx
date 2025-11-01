import React from 'react';
import { useDataStore } from '@/store/use-data-store';
import AuditCard from './AuditCard';
import { useInteractionStore } from '@/store/use-interaction-store';

const AuditList: React.FC = () => {
    const { auditItems } = useDataStore();
    const { openModal, setSelectedAudit } = useInteractionStore();

    const handleViewDetails = (auditId: string) => {
        const audit = auditItems.find(item => item.id === auditId);
        if (audit) {
            setSelectedAudit(audit);
            openModal('auditDetail');
        }
    };

    if (auditItems.length === 0) {
        return <p>Nenhuma auditoria encontrada.</p>;
    }

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {auditItems.map((audit) => (
                <AuditCard key={audit.id} audit={audit} onViewDetails={handleViewDetails} />
            ))}
        </div>
    );
};

export default AuditList;