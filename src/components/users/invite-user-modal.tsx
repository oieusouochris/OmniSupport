import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface InviteUserModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const InviteUserModal: React.FC<InviteUserModalProps> = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Convidar Novo Usuário</DialogTitle>
                    <DialogDescription>
                        Envie um convite para um novo membro se juntar à sua equipe.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" placeholder="nome@exemplo.com" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="role">Função</Label>
                        <Select defaultValue="agent">
                            <SelectTrigger id="role">
                                <SelectValue placeholder="Selecione uma função" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="agent">Agente</SelectItem>
                                <SelectItem value="supervisor">Supervisor</SelectItem>
                                <SelectItem value="admin">Administrador</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancelar</Button>
                    <Button>Enviar Convite</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default InviteUserModal;
