import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';

// Mock data
const mockEvents = [
    { id: 1, name: 'Regra "Fechar Inativos"', timestamp: '2023-10-27 10:00' },
    { id: 2, name: 'Regra "Atribuir a Equipe de Vendas"', timestamp: '2023-10-26 15:30' },
];

interface AutomationEventsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AutomationEventsModal: React.FC<AutomationEventsModalProps> = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Histórico de Automação</DialogTitle>
                    <DialogDescription>
                        Regras de automação que foram executadas nesta conversa.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-80">
                    <ul className="space-y-2 p-4">
                        {mockEvents.map(event => (
                            <li key={event.id} className="text-sm">
                                <span className="font-semibold">{event.name}</span>
                                <span className="text-muted-foreground"> - {event.timestamp}</span>
                            </li>
                        ))}
                    </ul>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default AutomationEventsModal;
