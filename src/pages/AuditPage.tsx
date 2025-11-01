import React from 'react';
import AuditList from './components/AuditList';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import AddAuditItemModal from './components/AddAuditItemModal';
import { useInteractionStore } from '@/store/use-interaction-store';

const AuditPage: React.FC = () => {
    const { openModal } = useInteractionStore();

    return (
        <div className="space-y-6 p-4 md:p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Auditorias</h1>
                <Button onClick={() => openModal('addAuditItem')}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Adicionar Auditoria
                </Button>
            </div>
            <AuditList />
            <AddAuditItemModal />
        </div>
    );
};

export default AuditPage;