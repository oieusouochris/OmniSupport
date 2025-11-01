import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const shortcuts = [
    { command: 'Abrir paleta de comandos', keys: '⌘ + K' },
    { command: 'Busca Global', keys: '⌘ + /' },
    { command: 'Novo Ticket', keys: 'N' },
    { command: 'Ir para a Caixa de Entrada', keys: 'G then I' },
    { command: 'Ir para Configurações', keys: 'G then S' },
];

const KeyboardShortcuts: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Atalhos de Teclado</CardTitle>
                <CardDescription>
                    Use estes atalhos para navegar e executar ações mais rapidamente.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Comando</TableHead>
                            <TableHead className="text-right">Teclas</TableHead>
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
            </CardContent>
        </Card>
    );
};

export default KeyboardShortcuts;