import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';

const shortcuts = [
    { command: 'Abrir paleta de comandos', keys: '⌘ + K' },
    { command: 'Busca Global', keys: '⌘ + /' },
    { command: 'Nova Auditoria', keys: 'Shift + A' },
    { command: 'Ir para Configurações', keys: 'G then S' },
];

interface KeyboardShortcutsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({ isOpen, onClose }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Atalhos de Teclado</DialogTitle>
                    <DialogDescription>
                        Navegue pela plataforma de forma mais eficiente com estes atalhos.
                    </DialogDescription>
                </DialogHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Ação</TableHead>
                            <TableHead className="text-right">Atalho</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {shortcuts.map((shortcut) => (
                            <TableRow key={shortcut.command}>
                                <TableCell>{shortcut.command}</TableCell>
                                <TableCell className="text-right">
                                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                        {shortcut.keys}
                                    </kbd>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </DialogContent>
        </Dialog>
    );
};
