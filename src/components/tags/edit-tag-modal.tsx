import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface EditTagModalProps {
    isOpen: boolean;
    onClose: () => void;
    tagName: string | null;
}

const EditTagModal: React.FC<EditTagModalProps> = ({ isOpen, onClose, tagName }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar Tag</DialogTitle>
                    <DialogDescription>
                        Altere o nome e a cor da tag.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="tag-name">Nome da Tag</Label>
                        <Input id="tag-name" defaultValue={tagName || ''} />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="tag-color">Cor</Label>
                        <Input id="tag-color" type="color" defaultValue="#cccccc" />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancelar</Button>
                    <Button>Salvar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EditTagModal;
