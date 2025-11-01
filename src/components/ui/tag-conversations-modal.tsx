import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './dialog';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';

interface TagConversationsModalProps {
    isOpen: boolean;
    onClose: () => void;
    conversationIds: string[];
}

const TagConversationsModal: React.FC<TagConversationsModalProps> = ({ isOpen, onClose, conversationIds }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar Tags</DialogTitle>
                    <DialogDescription>
                        Adicione tags a {conversationIds.length} conversa(s) selecionada(s).
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                        <Input id="tags" placeholder="faturamento, urgente, vip" />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancelar</Button>
                    <Button>Aplicar Tags</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default TagConversationsModal;
