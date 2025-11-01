import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { useDataStore } from '../../store/use-data-store';

interface BulkAssignModalProps {
    isOpen: boolean;
    onClose: () => void;
    conversationIds: string[];
}

const BulkAssignModal: React.FC<BulkAssignModalProps> = ({ isOpen, onClose, conversationIds }) => {
    const { users } = useDataStore();

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Atribuir Conversas</DialogTitle>
                    <DialogDescription>
                        Atribua {conversationIds.length} conversa(s) a um agente ou equipe.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Selecione um agente..." />
                        </SelectTrigger>
                        <SelectContent>
                            {users.map(user => (
                                <SelectItem key={user.uid} value={user.uid}>{user.displayName}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancelar</Button>
                    <Button>Atribuir</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default BulkAssignModal;