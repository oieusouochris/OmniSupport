import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../../ui/dialog';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { type CannedResponse } from '../../../lib/definitions';

interface EditCannedResponseModalProps {
    isOpen: boolean;
    onClose: () => void;
    response: CannedResponse | null;
    onSave: (response: CannedResponse) => void;
}

const EditCannedResponseModal: React.FC<EditCannedResponseModalProps> = ({ isOpen, onClose, response, onSave }) => {
    const [shortcut, setShortcut] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');

    useEffect(() => {
        if (response) {
            setShortcut(response.shortcut);
            setContent(response.content);
            setTags(response.tags.join(', '));
        }
    }, [response]);

    const handleSave = () => {
        if (response) {
            onSave({
                ...response,
                shortcut,
                content,
                tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
            });
        }
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar Resposta Pronta</DialogTitle>
                    <DialogDescription>
                        Ajuste o atalho, conteúdo e tags da resposta.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="shortcut">Atalho</Label>
                        <Input id="shortcut" value={shortcut} onChange={(e) => setShortcut(e.target.value)} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="content">Conteúdo</Label>
                        <Textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} rows={5} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                        <Input id="tags" value={tags} onChange={(e) => setTags(e.target.value)} />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancelar</Button>
                    <Button onClick={handleSave}>Salvar Alterações</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EditCannedResponseModal;
