import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';

interface Version {
    id: string;
    version: number;
    author: string;
    timestamp: string;
    comment: string;
}

// Mock data
const mockHistory: Version[] = [
    { id: 'v3', version: 3, author: 'Admin Chris', timestamp: '2023-10-27 10:00', comment: 'Adicionada verificação de segurança.' },
    { id: 'v2', version: 2, author: 'Supervisor Ana', timestamp: '2023-10-26 15:30', comment: 'Ajuste no tempo de espera.' },
    { id: 'v1', version: 1, author: 'Admin Chris', timestamp: '2023-10-25 09:00', comment: 'Versão inicial.' },
];

interface VersionHistoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    flowName: string;
}

const VersionHistoryModal: React.FC<VersionHistoryModalProps> = ({ isOpen, onClose, flowName }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Histórico de Versões: {flowName}</DialogTitle>
                    <DialogDescription>
                        Veja as alterações feitas neste fluxo ao longo do tempo.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-80">
                    <div className="space-y-4 p-4">
                        {mockHistory.map(version => (
                            <div key={version.id} className="p-3 border rounded-md">
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold">Versão {version.version}</p>
                                    <Button variant="ghost" size="sm">Restaurar</Button>
                                </div>
                                <p className="text-sm text-muted-foreground italic">"{version.comment}"</p>
                                <p className="text-xs text-muted-foreground mt-2">{version.author} em {version.timestamp}</p>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default VersionHistoryModal;
