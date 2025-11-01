import React from 'react';
import { useInteractionStore } from '../../store/use-interaction-store';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';

const AuditHistoryModal: React.FC = () => {
    const { modal, closeModal, selectedAudit } = useInteractionStore();
    const isOpen = modal === 'auditHistory' && selectedAudit !== null;

    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Histórico da Auditoria: {selectedAudit?.id}</DialogTitle>
                    <DialogDescription>
                        Ações e alterações registradas para esta auditoria.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-96">
                    <div className="py-4 pr-4">
                        {selectedAudit?.history && selectedAudit.history.length > 0 ? (
                            <div className="relative pl-6">
                                <div className="absolute left-3 top-0 h-full w-0.5 bg-border"></div>
                                <ul className="space-y-6">
                                    {selectedAudit.history.map(event => (
                                        <li key={event.id} className="relative">
                                             <div className="absolute -left-[30px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                                                <div className="h-2 w-2 rounded-full bg-primary" />
                                            </div>
                                            <p className="text-sm font-medium">{event.action}</p>
                                            <p className="text-xs text-muted-foreground">
                                                {new Date(event.timestamp).toLocaleString('pt-BR')} por {event.userId}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p className="text-sm text-muted-foreground">Nenhum histórico encontrado para esta auditoria.</p>
                        )}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default AuditHistoryModal;
