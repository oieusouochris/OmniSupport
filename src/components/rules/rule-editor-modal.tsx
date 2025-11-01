import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface RuleEditorModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const RuleEditorModal: React.FC<RuleEditorModalProps> = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Editor de Regra de Automação</DialogTitle>
                    <DialogDescription>
                        Crie ou edite as condições e ações para esta regra.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4">
                    <div>
                        <Label htmlFor="rule-name">Nome da Regra</Label>
                        <Input id="rule-name" placeholder="Ex: Fechar tickets inativos" />
                    </div>
                    <div className="p-8 border rounded-lg flex items-center justify-center bg-muted">
                        <p className="text-muted-foreground">Editor visual de condições e ações (em breve).</p>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancelar</Button>
                    <Button>Salvar Regra</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default RuleEditorModal;
