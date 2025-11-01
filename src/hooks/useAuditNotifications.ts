import { useEffect, useRef } from 'react';
import { useDataStore } from '../store/use-data-store';
import { useToast } from './use-toast';
import { type AuditItem } from '../lib/definitions';

/**
 * Hook para disparar notificações com base em mudanças nos itens de auditoria.
 */
export const useAuditNotifications = () => {
    const { auditItems } = useDataStore();
    const { toast } = useToast();
    const prevAuditItemsRef = useRef<AuditItem[]>(auditItems);

    useEffect(() => {
        // Compara o estado atual com o anterior para detectar mudanças
        const prevItemsMap = new Map(prevAuditItemsRef.current.map(item => [item.id, item.status]));
        
        auditItems.forEach(currentItem => {
            const prevStatus = prevItemsMap.get(currentItem.id);
            if (prevStatus && prevStatus !== currentItem.status) {
                toast({
                    title: 'Auditoria Atualizada',
                    description: `O status da auditoria "${currentItem.id}" mudou para ${currentItem.status}.`,
                });
            } else if (!prevStatus) {
                 toast({
                    title: 'Nova Auditoria',
                    description: `Uma nova auditoria foi criada: ${currentItem.description}.`,
                });
            }
        });

        // Atualiza a referência para a próxima renderização
        prevAuditItemsRef.current = auditItems;
    }, [auditItems, toast]);
};
