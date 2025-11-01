import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { type BaseAppUser } from '../../lib/definitions';

interface EditUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: BaseAppUser | null;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ isOpen, onClose, user }) => {
    const [role, setRole] = useState(user?.role || 'agent');

    useEffect(() => {
        if (user) {
            setRole(user.role);
        }
    }, [user]);

    if (!user) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Editar Usuário</DialogTitle>
                    <DialogDescription>
                        Altere a função e outras informações de {user.displayName}.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" type="email" value={user.email || ''} disabled />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="role">Função</Label>
                        <Select value={role} onValueChange={(value) => setRole(value as any)}>
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
                    <Button>Salvar Alterações</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EditUserModal;
