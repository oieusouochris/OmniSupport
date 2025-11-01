import React, { useState } from 'react';
import { useInteractionStore } from '@/store/use-interaction-store';
import { useDataStore } from '@/store/use-data-store';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { type AuditCategory } from '@/lib/definitions';

const AddAuditItemModal: React.FC = () => {
    const { modal, closeModal } = useInteractionStore();
    const { addAuditItem } = useDataStore();
    const [category, setCategory] = useState<AuditCategory>('Segurança');
    const [description, setDescription] = useState('');

    const isOpen = modal === 'addAuditItem';

    const handleSubmit = () => {
        if (description.trim()) {
            addAuditItem({ category, description });
            closeModal();
            setDescription('');
        }
    };
    
    const handleClose = () => {
        setDescription('');
        closeModal();
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar Nova Auditoria</DialogTitle>
                    <DialogDescription>
                        Preencha os detalhes abaixo para criar um novo item de auditoria.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="category" className="text-right">
                            Categoria
                        </Label>
                        <Select onValueChange={(value: AuditCategory) => setCategory(value)} defaultValue={category}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Selecione uma categoria" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Segurança">Segurança</SelectItem>
                                <SelectItem value="Performance">Performance</SelectItem>
                                <SelectItem value="Qualidade">Qualidade</SelectItem>
                                <SelectItem value="Processo">Processo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Descrição
                        </Label>
                        <Textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="col-span-3"
                            placeholder="Descreva a auditoria..."
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleSubmit}>Salvar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddAuditItemModal;