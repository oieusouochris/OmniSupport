import React from 'react';
import { useInteractionStore } from '../../store/use-interaction-store';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Badge } from '../ui/badge';

const AuditDetailModal: React.FC = () => {
    const { modal, closeModal, selectedAudit } = useInteractionStore();
    const isOpen = modal === 'auditDetail' && selectedAudit !== null;

    if (!selectedAudit) return null;

    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Detalhes da Auditoria: {selectedAudit.id}</DialogTitle>
                    <DialogDescription>
                        Categoria: {selectedAudit.category}
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4">
                    <div>
                        <h4 className="font-semibold mb-1">Status</h4>
                        <Badge variant="outline">{selectedAudit.status}</Badge>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">Descrição</h4>
                        <p className="text-sm text-muted-foreground">{selectedAudit.description}</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-1">Data</h4>
                        <p className="text-sm text-muted-foreground">
                            {new Date(selectedAudit.timestamp).toLocaleString('pt-BR')}
                        </p>
                    </div>
                    {selectedAudit.history && selectedAudit.history.length > 0 && (
                        <div>
                            <h4 className="font-semibold mb-2">Histórico</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {selectedAudit.history.map(event => (
                                    <li key={event.id} className="border-l-2 pl-2">
                                        <p>{event.action} por {event.userId}</p>
                                        <p className="text-xs">{new Date(event.timestamp).toLocaleString('pt-BR')}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AuditDetailModal;
