import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';

interface CreateTicketModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CreateTicketModal: React.FC<CreateTicketModalProps> = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Criar Novo Ticket</DialogTitle>
                    <DialogDescription>
                        Preencha as informações abaixo para abrir um novo ticket de suporte.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="customer">Cliente</Label>
                        <Input id="customer" placeholder="Digite o nome ou e-mail do cliente..." />
                    </div>
                     <div className="grid gap-2">
                        <Label htmlFor="subject">Assunto</Label>
                        <Input id="subject" placeholder="Assunto do ticket..." />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                         <div className="grid gap-2">
                            <Label htmlFor="priority">Prioridade</Label>
                            <Select defaultValue="Média">
                                <SelectTrigger id="priority">
                                    <SelectValue placeholder="Selecione a prioridade" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Baixa">Baixa</SelectItem>
                                    <SelectItem value="Média">Média</SelectItem>
                                    <SelectItem value="Alta">Alta</SelectItem>
                                    <SelectItem value="Urgente">Urgente</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="channel">Canal</Label>
                            <Input id="channel" value="Manual" disabled />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Descrição</Label>
                        <Textarea id="description" placeholder="Descreva o problema ou a solicitação..." rows={5} />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancelar</Button>
                    <Button>Criar Ticket</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CreateTicketModal;
