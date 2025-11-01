import { useDataStore } from '../../store/use-data-store';
import { useToast } from '../use-toast';
import { type AuditStatus } from '../../lib/definitions';

export const useAuditActions = () => {
    const { updateAuditItemStatus } = useDataStore();
    const { toast } = useToast();

    const changeStatus = (id: string, status: AuditStatus) => {
        updateAuditItemStatus(id, status);
        toast({
            title: "Status da Auditoria Atualizado",
            description: `A auditoria ${id} foi marcada como ${status}.`,
        });
    };
    
    // Outras ações como delete, assign, etc., podem ser adicionadas aqui.
    const bulkChangeStatus = (ids: string[], status: AuditStatus) => {
        ids.forEach(id => updateAuditItemStatus(id, status));
        toast({
            title: "Status Atualizado em Massa",
            description: `${ids.length} auditorias foram marcadas como ${status}.`,
        });
    };


    return {
        changeStatus,
        bulkChangeStatus
    };
};
